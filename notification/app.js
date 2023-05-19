
const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notificstions");
const markAll = document.getElementById("marl_all");

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("unread");
    const newUnreadMessage = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessage.length;
  })
})

markAll.addEventListener("click", () => {
  unReadMessages.forEach(message => {
    message.classList.remove("unread")
  })
  const newUnreadMessages = document.querySelectorAll(".unread");
  unread.innerText = newUnreadMessages.length;
})
