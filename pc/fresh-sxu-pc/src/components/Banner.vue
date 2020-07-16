<template>
  <div id="root" class="rootTwo">
    <div id="logo" class="logoTwo"></div>
    <div id="different" class="d_Two">
      新生手册
      <div id="d_d">
        <span>
          <svg
            t="1594892725157"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3145"
            width="10"
            height="10"
          >
            <path
              d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
              p-id="3146"
              fill="#fff"
            />
          </svg>
          导航栏
          <svg
            t="1594892802235"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3269"
            width="10"
            height="10"
          >
            <path
              d="M454.188 785.022c-145.192-150.177-290.378-300.353-435.422-450.526-59.842-61.836 37.327-154.021 97.313-91.899 129.23 133.647 258.318 267.296 387.548 400.868 133.646-134.287 267.436-268.574 401.083-402.934 60.84-61.123 158.011 31.060 97.244 91.971-150.105 150.89-300.279 301.703-450.454 452.521-24.933 24.934-72.666 25.575-97.311 0z"
              p-id="3270"
              fill="#fff"
            />
          </svg>
        </span>
      </div>
    </div>
    <div id="main">
        <ul>
            <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style>
#root {
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}
.rootTwo {
  width: 70px;
}

#logo {
  height: 140px;
  background: url(http://bkzs.sxu.edu.cn/images/2019-07/d451653d059c4a6f843ca1a4a9621b36.gif)
    no-repeat;
  background-size: 75%;
  background-position: 50%;
}

.logoTwo {
  opacity: 0;
}

#different {
  width: 18px;
  padding: 50px 27px;
  position: absolute;
  top: 0;
  font-size: 16px;
}

.d_Two {
  opacity: 1;
}

#d_d {
  position: absolute;
  top: 45vh;
  color: #999;
}

/* #d_d svg {

} */

#main {
    white-space: nowrap;
    overflow: hidden;
}

#main a{
    color: #2d8cf0;
    background: 0 0;
    text-decoration: none;
    outline: 0;
    cursor: pointer;
    transition: color .2s ease;
}

</style>
