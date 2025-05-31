import { useState } from 'react';
import { apiServices } from '../services/apiService';
import { UserModel } from '../models/UserModel';

export function useUserViewModel() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', job: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const mapToUserViewModel = (data) => {
    return data.map(user => new UserModel(user));
  };

  const fetchUsers = async () => {
    const [res1, res2] = await Promise.all([
      apiServices.getUsers(1),
      apiServices.getUsers(2),
    ]);
    const allUsers = [...res1.data, ...res2.data];
    setUsers(mapToUserViewModel(allUsers));
  };

  const openCreatePopup = () => {
    setFormData({ name: '', job: '' });
    setIsUpdateMode(false);
    setIsPopupOpen(true);
  };

  const openUpdatePopup = (user) => {
    setFormData({
      name: `${user.firstName} ${user.lastName}`,
      job: '',
    });
    setSelectedUserId(user.id);
    setIsUpdateMode(true);
    setIsPopupOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (isUpdateMode) {
        const response = await apiServices.updateUser(selectedUserId, formData);
        alert(`✅ Update Success!\n\n${JSON.stringify(response, null, 2)}`);
      } else {
        const response = await apiServices.createUser(formData);
        alert(`✅ User Created!\n\n${JSON.stringify(response, null, 2)}`);
      }
      setIsPopupOpen(false);
      fetchUsers();
    } catch (error) {
      alert('❌ Failed. Try Again!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiServices.deleteUser(id);
      setUsers((prev) => prev.filter((user) => user.id !== id));
      alert('✅ User has been deleted (hidden visually)');
    } catch (error) {
      alert('❌ Failed to delete user');
    }
  };

  return {
    users,
    formData,
    setFormData,
    isPopupOpen,
    isUpdateMode,
    openCreatePopup,
    openUpdatePopup,
    handleSubmit,
    handleDelete,
    fetchUsers,
    setIsPopupOpen,
  };
}
