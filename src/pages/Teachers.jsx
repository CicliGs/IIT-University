import React, { useState } from 'react';
import './Teachers.css'; // Импортируем файл со стилями

const Teachers = () => {
  // Состояния для управления профилем преподавателя
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('Ваш ник');

  // Обработчик изменения изображения профиля
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  // Обработчик сохранения изменений профиля
  const handleSaveProfile = () => {
    // Здесь можно отправить данные на сервер или обработать их локально
    console.log('Сохранить профиль:', { profileImage, nickname });
  };

  // Обработчик наведения курсора на фотографию профиля
  const handleEditHover = () => {
    // Здесь можно выполнить нужные действия при наведении
  };

  // Обработчик добавления лекции
  const handleAddLecture = () => {
    // Здесь можно реализовать логику добавления лекции
    console.log('Добавить лекцию');
  };

  // Обработчик добавления видео
  const handleAddVideo = () => {
    // Здесь можно реализовать логику добавления видео
    console.log('Добавить видео');
  };

  // Обработчик добавления изображения
  const handleAddImage = () => {
    // Здесь можно реализовать логику добавления изображения
    console.log('Добавить изображение');
  };

  return (
    <div className="teachers-container">
      <h1 className="teachers-title">Панель преподавателя</h1>
      <div className="profile">
        <div className="profile-info">
          <div className="profile-image" onMouseEnter={handleEditHover}>
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <img
              src="https://via.placeholder.com/150" // Пример ссылки на изображение
              onClick={() => document.querySelector('input[type="file"]').click()}
            />
            <div className="edit-label">
              <img src="../public/edit-pen.svg" alt="" />
            </div>
          </div>
          <div className="profile-details">
            <h2 className="profile-nickname">{nickname}</h2>
          </div>
        </div>
      </div>
      <div className='add'>
      <div className="add-lecture">
        <h2 className="add-title">Добавить лекцию</h2>
        <button onClick={handleAddLecture}>Выбрать файл</button>
      </div>
      <div className="add-video">
        <h2 className="add-title">Добавить видео</h2>
        <button onClick={handleAddVideo}>Выбрать файл</button>
      </div>
      <div className="add-image">
        <h2 className="add-title">Добавить изображение</h2>
        <button onClick={handleAddImage}>Выбрать файл</button>
      </div>
      </div>
    </div>
  );
};

export default Teachers;
