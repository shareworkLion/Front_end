const search = document.querySelector('.btnSearch')
const contents = document.querySelector('.form-control')

search.addEventListener('click', () => {
  console.log('clicked!!')
})

function wow() {
  if(contents != null) {
    console.log(contents.value + "를 입력했습니다");
  }
};

function arraowClick() {
  console.log('arrow Clicked!')
}