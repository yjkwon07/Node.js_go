/*
    미리 이벤트리스너를 만들어 두고,
    (이벤트 리스너는 특정 이벤트가 발생햇을 때 어떤 동작을 할지 정의하는 부분)
    예시) 사람들이 서버에 방문(이벤트)하면 HTML 파일을 줄거야
*/

const EventEmitter = require('events');
// 이벤트 커스텀!!!!
const myEvent = new EventEmitter();
// on === addListner
// 이벤트리스너는 여러 개를 달 수도 있따.
myEvent.addListener('방문', () => {
    console.log('방문해주셔서 감사합니다.');
});
myEvent.on('종료', () => {
    console.log('안녕히가세요');
});
myEvent.on('종료', () => {
    console.log('제발 좀 가세요');
});
myEvent.once('특별이벤트', () => {
    console.log('힌 반만 실행됩니다.');
});
myEvent.emit('방문');
myEvent.emit('종료');
myEvent.emit('특별이벤트');
myEvent.emit('특별이벤트');

myEvent.on('계속', () => {
    console.log('계속 리스닝');
});
myEvent.on('계속', () => {
    console.log('계속 리스닝22');
});
myEvent.emit('계속');
// 모든 리스너를 해제 
// ex) 종료 2개 다 해제
myEvent.removeAllListeners('계속');
myEvent.emit('계속');

// 선택적으로 지우고 싶으면 그 전에 리스너에 콜백함수를 넣어야 한다.
const callback = () =>{
    console.log('bye~bye');
}
myEvent.on('bye' , () => {
    console.log('hey!!');
});
myEvent.on('bye', callback);
myEvent.removeListener('bye', callback);
myEvent.emit('bye');
console.log(myEvent.listenerCount('bye'));