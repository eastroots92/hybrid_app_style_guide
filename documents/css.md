# E92's hybrid_app_style_guide

## Container

### Width 고정을 할 경우

hybrid app을 만들더라도 Base는 Web이며 Web에서도 모바일 환경과 동일하게 보여주기 위해 컨테이너의 `Width`를 `600px`로 고정한다.

```html
<div class="container">
    ...
</div>
```



### Height 고정을 할 경우

내부에 Div `Height`를 `%`로 나누어 면적을 나누고 싶을 경우에 `div.container`내부 면적의 총 `height` 합이 `100%`으로 맞춰지면 된다.

```Html
<div class="container">
    <div style="height: 40%">
        ...
    </div>
    <div style="height: 60%">
        ...
    </div>
</div>
```



* Div 내부의 내용이 많아 부득이하게 다른 영역을 침범하거나 스크롤 바가 생겨 `height` 고정이 안될 경우 `div.container_hidden` 또는 `div.container_scroll`을 삽입하면 된다.
  * `div.container_hidden`의 경우 설정 된 면적이 초과 될 경우 내용을 숨겨 버린다.
  * `div.container_scroll`의 경우 설정 된 면적이 초과 될 경우 내부에 Scrollbar를 만든다. 

```html
<div class="container" >
        <div class="container_scroll" style="height: 60%; background-color:rgb(144, 197, 241)">
            1<br>1<br>1<br>1<br>
            2<br><br>2<br><br>2<br><br>2<br><br>
            3<br><br><br>3<br><br><br>3<br><br><br>
            4<br><br><br><br>4<br><br><br><br>
            5<br>5<br>5<br>5<br>5<br>5<br>5<br>5<br>5
        </div>
        <div class="container_hidden"style="height: 40%; background-color: rgb(230, 184, 125)">
            1<br>1<br>1<br>1<br>
            2<br><br>2<br><br>2<br><br>2<br><br>
            3<br><br><br>3<br><br><br>3<br><br><br>
            4<br><br><br><br>4<br><br><br><br>
            5
        </div>
    </div>
```



## Header

화면의 제일 상단에 Header (`Tab Bar`)를 추가하고 싶을 경우 `header.header`를 통해 만들어 주면 된다.

Header를 추가하게 되면 header 영역만큼 Layout이 늘어나게 되는데 만약 `div.container`의 Layout을 `100%`로 유지하고 싶다면. `Div.container.header`로 만들어 주면 된다. (Header가 차지하는 영역만큼 `height`가 줄어든다.)

* Header 추가

  ```html
  <header class="header">
      헤더 영역입니다.
  </header>
  <div class="container">
      메인 영역입니다.
  </div>
  ```

* `div.container`의 `height`를 100%로 유지시킬 경우

  ```html
  <header class="header">
      헤더 영역입니다.
  </header>
  <div class="container header">
      메인 영역입니다.
  </div>
  ```



### Header Shadow

메인 영역에서 스크롤 시 Header영역에서 그림자 효과를 주고 싶다면 `header`에 `.shadow`를 추가하면 된다.
`container`영역에서 스크롤이 생길 경우 header에 그림자가 추가 된다.

```html
<header class="header shadow">
    헤더 영역입니다.
</header>
<div class="container header">
    메인 영역입니다.
</div>
```



## Footer

화면 하단에 Footer를 고정하고 싶다면 `footer.footer`를 이용하면 된다. 이를 이용해서 하단에 Nav Bar처럼 이용할 수 있다.
Header와 마찬가지로 메인 영역 (`div.container`)의 Layout이 늘어나기 때문에 Footer를 고정하고 싶다면 반드시 `div.container.footer`를 넣어줘야 한다. 

```html
<div class="container footer">
    메인 영역입니다.
</div>
<footer class="footer">
	푸터 영역입니다.
</footer>
```

* Header와 Footer를 함께 사용하는 경우

  Header와 Footer를 함께 사용하는 경우 `div.container`에 `.header_footer`를 추가해야 한다. `div.header`와 `div.footer`를 이용하게 되면 둘 중에 하나만 적용이 되기 때문에 메인 영역에 Scroll이 생긴다.

```html
<header class="header shadow">
    헤더 영역입니다.
</header>
<div class="container header_footer">
    메인 영역입니다.
</div>
<footer class="footer">
	푸터 영역입니다.
</footer>
```



### Footer Grid

footer 영역에서 Grid를 이용해 영역을 나눌 수 있다.

footer 안에 `div.col_n`의 형식으로 생성하면 된다. `n`에 나누고싶은 Grid의 수를 적고 해당 수만큼 `div.col_n`을 적어 만들어 주면 된다. (최대 5개 생성 가능)

```html
<!-- Grid를 3개로 나누고 싶은 경우 -->
<footer class="footer">
	<div class="col_3"> Grid 3</div>
    <div class="col_3"> Grid 3</div>
    <div class="col_3"> Grid 3</div>
</footer>

<!-- Grid를 5개로 나누고 싶은 경우 -->
<footer class="footer">
	<div class="col_5"> Grid 5</div>
    <div class="col_5"> Grid 5</div>
    <div class="col_5"> Grid 5</div>
    <div class="col_5"> Grid 5</div>
    <div class="col_5"> Grid 5</div>
</footer>
```



## Flex

FLex는 엘리먼트들의 크기나 위치를 쉽게 잡을 수 있다.

### 시작

* `.flex` : 단순히 Flex를 이용하고 싶다면 Flex를 이용할 Block에 `.flex`를 추가하면 된다.
* `.inline_flex ` : Block을 차지하지 않는 상황에서 Flex를 이용하고 싶다면 `.flex`대신 이것을 사용하면 된다. 

주의해야 할 점은 해당 Class 요소 안에 `!important`가 적용 되어있기 때문에 `display:none` 등 기본적인 CSS 접근 법으로는 적용이 안된다. 만약 display를 변경하고 싶다면 `display`에 `!important`를 함께 적어 사용하면 된다.

### 가로 세로 정렬 여부

* `.flex_row` : flex 내 요소들을 가로로 나열하고 싶다면 `flex_row`를 적으면 된다. (기본적으로 flex는 row임)
* `.flex_column` : flex 내 요소들을 세로로 나열하고 싶다면 이 클래스를 추가하면 된다.

이 요소 외에도 리버스와 같은 기능들도 있지만 본 design guide는 추가되어 있지 않다.



### 좌우 정렬 (간격)

좌우 정렬 여부를 조절하고 싶다면 아래의 클래스를 추가하면 된다.

* `.justify_content_start` : 왼쪽 정렬

- `.justify_content_end` : 오른쪽 정렬
- `.justify_content_center` : 가운데 정렬
- `.justify_content_between` : `margin`없이 균등하게 정렬 (첫 시작점부터 끝 지점에 각각 하나의 요소들이 들어가며 그 중간에 균일한 간격으로 배치된다.)
- `.justify_content_around` : between과 유사하나 첫 지점과 끝지점에서 시작하는 것이 아니라 자신의 요소 양 옆에 `margin`이 추가된 상태로 배치된다.

위 요소들은 기본적으로 좌우 정렬을 하지만 `.flex_column`이 추가되어있다면 상하 정렬로 적용이 된다.



### 상하 정렬 (간격)

* `.align_items_start` : 상단 정렬
* `.align_items_end` : 하단 정렬
* `.align_items_center` : 가운데 정렬
* `.align_items_baseline` : 이기능은 사실 활용해본 적이 없어서 잘 모르겠다 (ㅠㅠ)
* `.align_items_stretch` :  상하에 Margin이 가득차게된다.

위 요소들은 기본적으로 상하 정렬 하지만 `.flex_column`이 추가되어있다면 좌우 정렬로 적용이 된다.



## Text Aligin

Text Aligin을 이용하면 Block 내에서 좌,우 가운데 정렬 균등 정렬을 할 수 있다. 

* `.text_left` : Block 내에서 왼쪽 정렬
* `.text_right` : Block 내에서 오른쪽 정렬
* `.text_center` : Block 내에서 중앙 정렬
* `.text_justify` : Block 내에서 균등하게 정렬

Text Aligin의 경우 좌우 정렬만 가능하고 상하 조절은 불가능하다. 상하 조절을 하기위해서 여러가지 방법이 있지만 Flex를 추천한다.