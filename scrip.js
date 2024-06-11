document.addEventListener("DOMContentLoaded", function() {
    var mapOptions = {
        center: new naver.maps.LatLng(37.5665, 126.9780), // 초기 중심 좌표 설정 (예: 서울시청)
        zoom: 10 // 초기 줌 레벨 설정
    };

    var map = new naver.maps.Map('map', mapOptions);
});
