'use client';
import { useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import homeStyles from './components/homeStyles';
import { useUserViewModel } from '../viewmodels/UserViewModel';
import UserPopup from './components/UserPopUp';

export default function HomeView() {
  const {
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
  } = useUserViewModel();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={homeStyles.container}>
      <div style={homeStyles.header}>
        <h2 style={homeStyles.title}>User Management</h2>
        <button onClick={openCreatePopup} style={homeStyles.addButton}>
          <FaPlus style={{ marginRight: 8 }} />
          Add User
        </button>
      </div>

      <div style={homeStyles.userList}>
        {users.map((user) => (
          <div
            key={user.id}
            style={homeStyles.userCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = '1px solid cyan';
              e.currentTarget.style.boxShadow = '0 0 10px cyan';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = '1px solid #ccc';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <img
              src={user.avatar || 'https://placehold.co/40x40'}
              alt={user.firstName}
              style={homeStyles.avatar}
            />
            <div style={homeStyles.userInfo}>
              <strong>{user.firstName} {user.lastName}</strong>
              <div>{user.email}</div>
            </div>
            <button onClick={() => openUpdatePopup(user)} style={homeStyles.editButton}>
              <FaEdit />
            </button>
            <button onClick={() => handleDelete(user.id)} style={homeStyles.deleteButton}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <UserPopup
          title={isUpdateMode ? 'Update User' : 'Create User'}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onCancel={() => setIsPopupOpen(false)}
          isUpdateMode={isUpdateMode}
        />
      )}
    </div>
  );
}
