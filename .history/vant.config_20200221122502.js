module.exports = {
  name: 'bobvux',
  build: {
    skipInstall: ['lazyload'],
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vueComponentLib/',
    },
  },
  site: {
    title: 'VUE移动组件库',
    description: '轻量、可靠的移动端 Vue 组件库',
    versions: [{ label: '下载库', link: 'bobvux.zip' }],
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/weapp.svg',
        url: '/mobile.html',
      },
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/youzan/vant',
      },
    ],
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAAAXNSR0IArs4c6QAAE4JJREFUeAHlnQmUXFWZx79X3UkvWYReqzsQuiESDxPDEmULMiFuZ4QBg5NRQDLijMCZCIaROY7CDDgzCMMyc4wER49zxAgKRhgWBxCBsChCMLIIYgKEJmJX9ZqkO0kn3al68/uqUr1UV9W799Wr6urue9J579373e9+9/7v+t3v3nKkxJ0rfzYzItGjykQWxvlDXP1rdUXm8pztiMzhyZ9bJeLswb+f79349/O+E/9tIqEtfG8pE2dLvSx725ENMWhK1iFraTlXDqvqkIFTAWC5I+4ZSPdBCrc8OCmdfWT6WXg+USZlGxvkmE2OPHkgOP75cyoJUHqkZu6QyEpXnPMprKXU7or8s2bGwRFnN5QbaU13hGXWA4607TOLWTiqCQPFlWXlUXntYyKxVYBxDkBUFi6bZpwpjF1Uig3lUra+Xjp/CWB8Ft8VHRRXFlREZOdFjsS/Qo5bip9lsxQpmFccKftGo6ze4Mi19KbFc0UDJSqNs+IydDG170pX3ObiZTHflJytjG03hKX1Dkc208sW3hUFlIjUriIrNwFGQ+GzVJgUqExvMe5c1iRdDxcmhRGuBQWF1rGI1nEbyX1oJMnJ/QY4986UijW10v7HQuUkVAjGyXGj5kZXhl6E/5QBRMuK1n7uoOx/PSJ12g0XpFIHzrRT6hcckPhPEP/4QgBeWjydR0NSfmFYOjqDlCvQlhKV+k/HJL55egCiMLgfc+XAS7SaZSUHiisryxjM18UldhdNWtUf08aR3yaR+GNRqf2noDKdd/flSktlVPrvRrizgxJqsvJhErAuLJddnu+6Ji9QdkjLIQPS9yCFeFqhCxJBUSI6W1lwJpSLrB1YPzi9fKvisd+R8r10JdXQzdE/KkktmoKjCUsoMaF/L+/oNQvrSHtDWJo+68hrg35Tgoc/1yV1TQzoj5LRRf44eMdCuFegesyR0MYZEn+6Vnr7vGNlpuiVI98zKH2nJxWd8Y8UVm7n8TIJfbJBulSvZu18gaItZJ/0PVOYjDnvItSdDKLrm6T399Y5Moygayha1oXk4QLSmmcYzYLM+UWTtJzpRwtgDYqq1iOy91GkC7jLcjbTt1zXIJfdn2+fbFFyrDuuDUVk7Qq6xqsAJ9BpPIV7V1h6zqebBXtzZwWKzrKi8sS9QQ7qCLwpJGX/0iidPzcXuzCUEan/BDOpr5O/DwSXgrO2WXq+ZMPPap0CIGsDBKQnJKGLw9J9cikAooWGXushZk8noeO6lM8dNgWZnda9vF1qrsgePj7EuKXowlDXIeNZ2PuExLmjWirXzJU/9djHLk6MiITrXRn8Jqmdl2+KFPIQf6eHpfc5E15GoKjqhJX6b2kluh+eh3P2kuDqJum5PQ8mRY0alZq/jYvzLcYbbADycturZfZxh8h2zxbo2X2pclF1WQEA8gfWCh+cTIAoBNTu/0G/dSITgTfygkRk/oDsud2EhycoUen993xnJQzmz82SqqWFnOKaZNYvDQrHV2dLxank4wW/PDSejsftUneJF4+c3VdyLj/0IvM539YkJPBwWCr/ypH2vV7ClHo43fhseo17KF5sC3y7HY7MXNgk0a5sHHK2FN2gyh+Q1nOmAiBagLpCb5LwX9KV/SJbgRr4H8q4f2MuuqwtRbdwaW4/yBU5V5h2WWGp+HAmQLqldl5M3GNi4oTJYD01rx5BDiG99xAPvZVU4lfJeyXvDmE8Eg79l9Di3AG8teVheOd2897NeMUz1IlKZnu5HGjLRyWTTCr7/9pimPhsRF5f6xnND+PUh1gK/CpTKoSPd2rkgApiG4k2jA818XG2zJbKpdmmvBGpYb9erjThlAcNsxynjQy+Co/nUU4+3yRHvOxH7ZFJBp0yU+Mx6nMXZAo38HuJSc8JVLxUhRuOkrH7Yj1ySR6AMO2d8alsgAynXPgXugn3ePKBfsu9lZX6CxFp62Mh9yv2Pr5GobbkI4KOCWgiPgXwfo33juuQ+rMyyTAOFJ0C0xV8OROxiR9xv4jAr5nQFp8mYfCHSax7ncjgNgB6mtnQxapg9SML3Q9abMdKhTI6HSoL+rbxbhwoaigHsU+7LOdOpr3fH59M6fnQZ2jXjVFH/Dv7pP9dWs+/qXrfVtJm6f4ujLBJsHeU80kdUvuR9JhjQFFTUrVcTCcy/O5lLr/GkLakyCgcDAXdq/fJzm1JK5UWJhrmjkGb3UbZZR5jhJL9nXGtZQwoUXn149SglpEoNm+hr86VdmZAk9rVuBK/KSp9r9NyUEyaObqxDhre1WbUY6moEMvYMDx6tO8YUGjKF44ONH1nBvFCk3zxe6b0pU6nFZPCeoZW82We2s15urAs/zZEL3kSZiBgeTCm3IdB0f40af2eIZanV+iaYm5MeYoTAAHAzKDV3EyLeVDXJV4s9SAS2u9rvegyhQO8zhCHwR8Ghf3rlUwhrfrSZALOb4thX5spM8XwA5wzWSg+oFY7Xuk1SjfnWxLrIi/SMeGkcQRbI6enPIdBASmf+wbuN1LMpuqTsjkDM6oNriyZkSuPuhBEo+CrPJhgDZd/AhTddwetpbkSzBSGEO1Ncvn/Zgqban4Ac1ZU2r7rla9GWcR5FsfajJWhY3hqnABFzxjSdfk40ubeOdXGklyFDjCf65CanBpiPT9JBf9xLj6ZwuB9VK80z9ewBChqC5WJ0MsPdcp6L5qpFs4u5DrVeuTOl/PD3OGZQ/fL/gQOCVAYnKxBIc5ruvmTmf3U9aVGL+iQHTnVUKzyN7NuecNHKSRB0XPqdF0fsGVAH/iYbRy/9FQAeoTScfQsf6/mVrkkQubHc4VnCWMYYUcxKpEF5Nh6Z5E5+RNZGBt4O7+jnL/HTCXCM0JzjSBDhIOf3eyF7B+SGYMVUjV4CO8ipwzqGkBnPjtkR3VM+qrjEqqmUjA5OVBND1yHEnQe8fmLz6Mw5iGAfr+PJxWuEM6d1yVPagE+k527q+VzafbwTCFua0IhjEJsBSvKezORZPMj4/FKmVt7qLTtzEYz0f6auU7pW8Ia42RAO4Vu5wxkqg1KLirlVVg/Zp3+JvdbBjuoHBSXuWOreFE5kRaaR0lSUkvfLGVAVEpH3qSVybMH/+j/lszokHf+AnC+xJ/1GKo8RzvK7ajR3+nvut/CZt52/I9ID8v1zZHEhSE/oAD9llyMSzFMdxyxxnyA3T62qENcMaKnff07yo1NtNyOymtdTnTlC/mTltysM4W61oll4jJRfk3SvZGjCscBzJN+ZaBi7vaK66fysoXQqi3F+jicKyE/0z2vPBQ1XC1TOGh0FgX3jr+E3Te94sHbupyIM0dbig9T1HiPl0CTIZx11h4q2A3+ZHUe9o7n+CmnOSFFxpv5WAom6P1jfSbvFxrGTbbSq26L8ek3BvH8lJPfllLuJzGDPBSfhD68xjZVKvJ/AQw9f24HgXU5MTlQUOz3UJj3D+QWZ/KEYhD4GTtpna2NEv5Pkzg+y6kKUJw9JgmMpgFNVtKT33VIA0bb8VWmOaGFcM7EucTi5O8sU94pOoAcVPWKTu1sZ2DW41AqUX3q1vMB6W+NiTQ7EmuimTdTOfjTJ6cPsC4B+JkIiJrEmclij3d9Ck8ZgoaK5KrZKn+JSsXTxc/phEbVNlHiRLiOMApNFLVMRAd13hOuQxqPREXz1xgdXg19zo2rVBzSRdUj56FsfDLl5/UkjrXJEnkY0BW9db8XlwN5gbJfdmphXKmZ4nnQjbwlPSjWxEvq/9RTVG0+as98dLzkOwrDhDugR+8TLibYRutx730KcEyGbI3vBjkK+Hm2e+85yNDogRy2lV35DmDnlbgcwCiRFBHTyNrU+2R5AoYWkHUh0UJ/z0LzAtY1PixVQhx3iA2Sro1itFfXKdZGZPTDR08WMPKRkwrbxgLz0/4ASR5sLZPyY+iS7reQo50VvetHB2StxLQQqmRI6QxbOKPzOxSLb/F3IxODY22Fw1DvLY5sf5Lu7wLiemrVqQjttJSQDz2WMy1ASQEAOEwM5B9jiWukagCpdrUam6TCTZ4sNn9UIZWLKfSnc9M77+iK3gco7pG75DDrRVduYSZHKOBwfYh7a1QG2vRIhZ7lMZVcrzgMy2K01M5t2eKgLdkc0qvGsxFk80ew0B4ZWJYtfDr4A0yDHqmge3u9XWrPNc2zWruwfbAaYL6SHocGsqtOuraG9O53BiLrgy8wWJ7OdJp+H87E/h66tPt3ynzPPZZUGQHMjdTtSylH6njSsTZ7AbBcuq8NMQJ0h87KwWnYeMwq4hQlpuWcPSC7f8NkYLFpFlmIfgcQ1oyi36TvOiVWqHST39K5CzF8Pt4y0pQmpxyPREvwbPsou2CvDLPPv5ad0H9VOsAYAQV1hA9QRA6Iu8or0ekWTouZxTruZzbnW9gJvYZy+jHj+wgo/FyF9mWe25vpBYxuil9xWGZtnpTOZ6p9A8wcJgEP6dF007w1SdPn6qU7ovSJ7uvg74dYtxadgXTIqytNE55mdDVoTtdTRgzZ3m605jkBSjKKe4d31PEUGMB9zTTh8bGntg/lspyL3S62zeUwKGGZ+yCQWuvBGNwWdUrdObYJTx96rbS5z7Wkl8XweKC/sMO58p9A8IV0Iq9v+s+vY1sLqHa/dcU4ptfXsufhdlEhdvK+Cz/0Qy7jW2gguXPnom539vMXpwbF+ReHLs6MhW0HV7XcHINz+HOreNctBVXr89RtXqcB/0ae/Pk56uGVc6Pw+ZxrUb3X7UbUEJGPEccU9zT2IHLYx47Qpr9RYGu4G+ub6f6ZvvUygf0ygHHcyMZTJrqg/AAGs5K65qHkPcVHh8Q9DWA/mgQsqFSy86GQH+J+gTOzU4wNGQOKBtFadN/AWhtKDe8rF+d9qRnE2GRK70uB6pTGxXGJA058BRKeWjgpnb1NMqfW9Pe+hseUlED6k0epd5snmZzLuuVWmzgTSUslol/rfJk1ws3N0ruU3+HSy2usdhbN5XerO6TfuKKPAyUsq39Kr2atpFQBAeZcVWubC1s6lGxkvYg+isviQsuQajt/ATunwZThOFD0DCN92vWmDNLp6Ktv4QaFE9L9J8s3LecprsVaQqtJrK6Dkzteb8prHCgaMSzvv5PW8oYpk7F0rl4E+lMmDVilTE6n15nMkgodmANrMcwQK01LIyMousJHH3aZKZN0OlpLK7O4R/RHNdPDJsu3AsMW7leDkpeW90dTXhlB0cgMgj+HEeOLb3fsoDhGNzX4TqHAERtl9r30GPuDSaaszZRPVlCUwUxxrwAYa0VlKnEG/j/npoZH/NyjleIxkU+dwjK+GtfwHLKqmdG2HOFjgnKCwuWY79IXXjMmhuWHAsM9Wk9NxjEG2bHitjcATy8igH3cZqGcExRlzmU4WJjLI+kJWX4fG5PYr7kacIllvAkl75C6ExEgbwMRptl0g+bOExS6L3eWVF5I3/onc7bjKRn8W1BZPcvmj+8JxHiuhfWhlfxz/ik4e6tl5n02fDxBUWbJG+9C59NiYjbMM9DORHm5FuuP+2w2gDLwKbiXXn9ORTLWV2UTCKXqOtsbA41A0QSbpetpNLcBTRHdc9gA+gMZ/4dS3LlEK7GKLd112Qra1J9epp87/v/DlD5FZwyKRmC1exMJfSsVOZ8nXQMq9vgtUXmFH6+sWak/w5QPvyDiutJcDSBciOP+gFaCXVze7jo/9zPTI9k5BHYYF36E0J+xi+lF7fBTHnJ9WMJ3jd4a9YoVRLi2Vra1L0JjrGPI4UHwpPI+xa8WcV7f/rfsrUFRgfWSnYhEf8bbR4PIQBqPHjJ0N4Ktx/zm+bSwQD8xOW11JXYRFe0i8nJYgMx3VIgs1iWFH56+QNGE1IYWk01VdX/cT8ImcRDubVrkY6g7nmBauTF51axJzMw0fdJcNyD7TuDOrg8DAleCyPszU/r3ReYhV8rOZgz2vYzwDYqKrXvP3B//fd50u7MILvEbkLqtwK+iulsp3B4GIj2Jxp/LL6KGKljsVpVJvIp9Y26PFb3ViBbgzj8IQCBdU7aMkpZuU1+Ahf1d2WhM/PMCRRPQMYaL9G+hP77CJMGpTRO6RK9ZzzePeYOSEoDB/3IAupkaOSPlN42e6Lacv+Nw0A+DyHNgoKgwTCdRS7h3A0xLEMJNEh49bCWvYOfymaDkDXRtwHbqJi5nO55aY6VWCCozE8DnZc40nhQkIJqHQEFRhno5G814BTOmL/DZq35TzdG9oG5yrsf+90Q90xh0/gLtvtKF0ynobhm8AZXF5+nSCppWetqF+3beYFf2bwDj14VKoygFxUGaU1DdY37kTlqDCha0XEMltI5Dbz54FWKhMClu7eWnL9C6utw24Z5csBwFzliPHjr/ze9voQLq6AycfQaGRWkp6ekyfV5OrbsKcJanh5XKNy2jCzBuwzjxtmKBkcr7hICSSpwt4vcmf9Al/llAak35T9STwmAAl0dZla/HaOI+UzPToOWdUFBSmVGtQJc0nMYdwufhp4bXC1JhhX8mfvn7cdQz/4ct9P1Mb/Xmowl1JQFKegn0SPPhg8nL+M8gbCnjENrcQPY3GETZeeDAJ/w2sR54rlEO/WWhB+70/Hl9lyQo6ULrVoFe/86t2QspzIVsKbciuBr6zaHfn43fHL6reDIo671fsic5W3J28N3GAc+3WZK1ocR8qxRaQnr+0r//HyDD8Yln5S56AAAAAElFTkSuQmCC',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'html',
            title: 'HTML规范',
          },
          {
            path: 'css',
            title: 'CSS规范',
          },
          {
            path: 'standard',
            title: 'STANDARD规范',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: 'UI规范',
        items: [
          {
            path: 'color-ui',
            title: 'ColorUI 颜色规范',
          },
          {
            path: 'font-ui',
            title: 'FontUI 字体规范',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'action-sheet',
            title: 'ActionSheet 上拉菜单',
          },
        ],
      },
    ],
  },
};
