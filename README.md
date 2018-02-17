# Hybrid App Style Guide

 Hybrid App 제작을 할 때 Web의 CSS를 쉽게 적용하기 위해 만들어진 프로젝트 입니다. 모바일 페이지에서 보여지는 화면만 고려하며 PC 페이지(`width: 1000px`)이상의 경우에는 모바일 화면과 동일하게 `Container`가 적용 됩니다.





## CSS

### 형식

* 특별한 경우를 제외하고는 `class`로 선언 한다. (`ID`사용 금지)
* `class`의 네이밍은 스네이크 케이스로 한다. (`_`(underscore)사용)
* CSS 규칙 선언시. 탭(띄어쓰기 4칸)을 적용한다.
* 다중 선택자를 이용할 경우 한 코드라인에 하나의 선택자만 적는다. 
* 선택자를 적고 난 후 규칙 선언부의 여는 괄호 `{` 타이핑 전에 띄어쓰기를 넣는다.
* 속성 부분 사이에 `:` 뒤에 띄어쓰기를 넣는다. (앞에는 넣지 않는다.)
* 규칙 선언부의 닫는 괄호`}`는 새로운 코드라인에 넣는다.
* 규칙 선언부 사이에 빈 줄을 적용한다.


* 주요한 `class`들은 외부 스타일 시트에 작성한다.
* 해당 페이지 내에서만 적용해야할 사항이 있다면 상황에 따라 내부 스타일 시트를 적용할 수 있다.
* 본 프로젝트 내에 구분(영역 판별을 위한 `background-color` 등)을 위한 경우를 제외하고는 절때 HTML 태그 내에 스타일 지정을 금한다.
* 역할을 구분 짓는 경우 반드시 주석 `/* */`을 이용해 역할을 적는다.
* 코드만으로 설명이 힘들 경우 주석을 이용해 설명을 첨부한다.



#### 잘못된 예시

```css
.sample{
 margin-top:40px;
 border:2px solid black; }
.col_1, .col_2, .col_3 
{
    /* */
}
```

#### 올바른 예시

```css
.sampel {
    margin-top: 40px;
    border: 2px solid black;
}

/* Grid 구분 */
.col_1,
.col_2,
.col_3 {
    /* */
}
```



## Javascript





## Include

* [jQuery_v3.3.1](http://jquery.com/)
* [swiper_v4.1.6](http://idangero.us/swiper/)

