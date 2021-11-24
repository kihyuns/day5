// console.log("-----------lotto-------------")
// console.log("-----------lotto-------------")
// console.log("-----------lotto-------------")
//
// const btn = document.getElementById("btn")
//
// console.log(btn)
//
// btn.addEventListener("click", (event) => {
//     console.log(event)
//
//     const target = document.getElementById("resultDiv") //document는 웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때 사용
//                                                                  //getElementById 해당 아이디의 요소를 선택함.
//     const balls = makeLottoNum()
//
//     console.log("balls" + balls)
//
//     // clear all <h3> tags
//     target.innerHTML = ''                     //innerHTML를 이용해서 태그의 내용을 가져오거나, 문자의 내용물을 바꿔칠 수 있다
//
//     let str = ''
//
//
//     for (const num of balls) {
//
//         str += `<h3> ${num} </h3>`
//
//         target.innerHTML = str
//
//         // const tag = document.createElement("h3")
//         // const textNode = document.createTextNode(num)
//         // tag.appendChild(textNode)
//         // target.appendChild(tag)                      // < 이 dom작업은 성능이 떨어짐   > 한꺼번에 dom작업을 하는 방법이 좋음
//     }
// }, false)
//
// // 1. 1 - 45까지의 숫자를 배열에 집어넣는 함수
// function nums() {
//     const lottoArr = []
//     for (let i = 0; i < 45; i++) {
//         lottoArr.push(i+1)
//     }
//     return lottoArr
// }
//
// // 2. 숫자 6개 뽑기
// function randomNum(lottoArr) {
//     const lottoResult = []
//
//     for (let  i= 0; i < 6; i++) {
//
//         const index =parseInt(Math.random() * lottoArr.length)
//
//         lottoResult.push(lottoArr[index]) // lottoResult 배열에 요소 추가하기
//         lottoArr.splice(index, 1) // 배열에서 요소 1개 제거
//
//     }
//
//     return lottoResult
// }
//
// function getLotto() {
//     const result = randomNum(nums())
//     return result
// }
//
// console.log(getLotto())

function makeLottoNum(){
    const arr = []
    for (let i = 0; i < 6; i++) {
        const tempNum = parseInt(Math.random() * 45 ) + 1
        //arr안에 tempNum이 있다면
        if(arr.indexOf(tempNum) >= 0){
            console.log("중복")
            i--
            continue
        }
        arr.push(tempNum)
    }                                                   // ↙  작은 숫자를 먼저 띄울때
    // arr.sort(function (a,b){
    //     return  a-b
    // })

    arr.sort((a,b) => a-b)
    return arr
}
