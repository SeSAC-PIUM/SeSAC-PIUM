function showAlert() {
  Swal.fire({
    title: '[강동/퍼블리싱] 직무가 맞으신가요?',
    text: '일치하지 않을시 마이페이지에서 수정가능합니다.',
    icon: 'warning',
    customClass: {
      // 여기서 css 클래스를 부여할 수 있습니다!
      title: 'modal-title', // 팝업창의 title에 대한 클래스 부여
      popup: 'modal-container', // 팝업창 자체에 대한 클래스 부여
    },

    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonColor: '#2da96e', // confrim 버튼 색깔 지정
    cancelButtonColor: '#c6c6d0', // cancel 버튼 색깔 지정
    confirmButtonText: '신청하기', // confirm 버튼 텍스트 지정
    cancelButtonText: '창 닫기', // cancel 버튼 텍스트 지정

    // reverseButtons: true, // 버튼 순서 거꾸로
  }).then((result) => {
    // 만약 Promise리턴을 받으면,
    if (result.isConfirmed) {
      // 만약 모달창에서 confirm 버튼을 눌렀다면

      Swal.fire({
        title: '신청이 완료되었습니다.',
        text: '3일 내에 카카오톡 알림으로 알려드려요.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#2da96e',
      });
      // Swal.fire('신청이 완료되었습니다.', '잘하셨습니다~!', 'success');
    }
  });
}
