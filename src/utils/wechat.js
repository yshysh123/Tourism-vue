import wx from './wx'

export function login () {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}

export function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

export function setStorage (key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

export function getStorage (key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

export function getLocation (type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

export function canvasToTempFilePath (type) {
  return new Promise((resolve, reject) => {
    wx.canvasToTempFilePath({ type: type, success: resolve, fail: reject })
  })
}

export function saveImageToPhotosAlbum (type) {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({ type: type, success: resolve, fail: reject })
  })
}

export function onShareAppMessage (type) {
  return new Promise((resolve, reject) => {
    wx.onShareAppMessage({ type: type, success: resolve, fail: reject })
  })
}