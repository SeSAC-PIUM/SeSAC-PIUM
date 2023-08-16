function showAlert() {
  Swal.fire({
    title: '[강동/퍼블리싱] 직무가 맞으신가요?',
    text: '일치하지 않을시 마이페이지에서 수정가능합니다.',
    icon: 'warning',

    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonColor: '#2da96e', // confrim 버튼 색깔 지정
    cancelButtonColor: '#c6c6d0', // cancel 버튼 색깔 지정
    confirmButtonText: '신청하기', // confirm 버튼 텍스트 지정
    cancelButtonText: '취소하기', // cancel 버튼 텍스트 지정

    // reverseButtons: true, // 버튼 순서 거꾸로
  }).then((result) => {
    // 만약 Promise리턴을 받으면,
    if (result.isConfirmed) {
      // 만약 모달창에서 confirm 버튼을 눌렀다면

      Swal.fire('신청이 완료되었습니다.', '잘하셨습니다~!', 'success');
    }
  });
}
