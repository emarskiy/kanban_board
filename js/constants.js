export const InsertPosition = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`,
};
export const StateActions = {
  TASK_CREATE: `task-create`,
  TASK_UPDATE_TITLE: `task-update-title`,
  TASK_UPDATE_POSITION: `task-update-position`,
  TASK_DELETE: `task-delete`,
  BASKET_CLEANUP: `basket-cleanup`,
  ELEMENT_DRAGOVER: `elementDragover`,
  ELEMENT_EDITED: `elementEdited`,
};
export const Status = {
  BACKLOG: `backlog`,
  PROCESSING: `processing`,
  DONE: `done`,
  BASKET: `basket`,
};
export const Key = {
  ENTER: 13,
  ESCAPE: 27,
};
export const STATE_EMPTY = `empty`;
export const Text = {
  EMPTY_TASK: `Drag the card`,
  EMPTY_BASKET: `Basket is empty`,
  NEW_TASK: `New task`,
};
export const MIN_TITLE_LENGTH = 2;
export const StatusLabel = {
  [Status.BACKLOG]: `Plans`,
  [Status.PROCESSING]: `In the process`,
  [Status.DONE]: `Done`,
  [Status.BASKET]: `Basket`,
};
export const HIDE_BLOCK_CLASS = `hidden-block`;
