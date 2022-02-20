import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';

const toogleNotifier = (message, statusClass) => {
  const modalMessages = document.querySelector('#messages');
  const notifyModal = new Modal(modalMessages, { backdrop: false });
  const modalMsgBody = document.querySelector('.modal_messages_body');
  modalMsgBody.innerHTML = message;
  modalMsgBody.classList.remove('success', 'failure');
  modalMsgBody.classList.add(statusClass);
  notifyModal.show();
  setTimeout(() => {
    notifyModal.hide();
  }, 2000);
};

const setupFormModal = () => {
  const setUpForm = document.querySelector('#setupFormModal');
  const modal = new Modal(setUpForm, {});
  modal.show();
  return modal;
};

export { toogleNotifier, setupFormModal };
