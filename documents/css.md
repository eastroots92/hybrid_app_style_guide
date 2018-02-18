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

