# final pjt



## ๐ํ๋ก์ ํธ ๊ตฌ์กฐ

- ๋ฐฑ์๋ ์๋ฒ: django rest-framework๋ฅผ ํ์ฉํ api ์๋ฒ
  - DRF
- ํ๋ก ํธ์๋ ์๋ฒ: vue.js๋ฅผ ํ์ฉํ ํ๋ก ํธ ์๋ฒ
  - ๊ฐ๋ฐํ๊ฒฝ
    - Vue.js 2 +
    - Node 14 X
  - Stack
    - HTML5
    - CSS3
    - Javascript
  - node modules
    - vuex
    - router
    - axios
    - fullcalendar
    - splidejs
    - fullcalendar
    - vue-cookies
    - vue-awesome-swiper
    - kakao link
    - lodash
    - vue-star-rating
    - autocomplete-vue
    
    

## ๐์์ธ ์ ๋ณด

### 1. ํ์ ์ ๋ณด ๋ฐ ์๋ฌด ๋ถ๋ด ๋ด์ญ 



#### ํ์

- ์ ํ๊ท (ํ์ฅ)
- ์ ์ ์ง (ํ์)



#### ์๋ฌด ๋ถ๋ด ๋ด์ญ

   - ๊ณตํต: ๊ตฌํํ  ๊ธฐ๋ฅ ๋ฐ api end points ์ค์ , ์ต์ข ์ ๊ฒ ๋ฐ ๋ฐํ ์๋ฃ ๊ตฌ์ฑ 
   - ์ ํ๊ท: backend api ์๋ฒ ๊ตฌ์ถ
   -  ์ ์ ์ง: frontend ์๋ฒ ๊ตฌ์ถ

   

### 2. ๋ชฉํ ์๋น์ค ๊ตฌํ ๋ฐ ์ค์  ๊ตฌํ ์ ๋



   #### ๋ชฉํ ์๋น์ค

##### ํ์ ์๋น์ค

- ์ํ ์ถ์ฒ๊ธฐ๋ฅ
- ์ปค๋ฎค๋ํฐ ๊ธฐ๋ฅ (๋๊ธ, ๋ฆฌ๋ทฐ), ํ์ (0-5)

##### ์ถ๊ฐ ์๋น์ค

- ์ํ ๊ฒ์์ด ์๋์์ฑ
- ๋๋ค์ ์ ํ๊ธฐ 
- ๊ด๊ณ  ๊ธฐ๋ฅ
- ์ํ ์ค์ผ์ค๋ฌ



#### ์ค์  ๊ตฌํ ์ ๋

| ํ์ ์ฌ๋ถ | ๊ธฐ๋ฅ๋ช               | ๊ตฌํ ์ฌ๋ถ | ๋น๊ณ                              |
| --------- | -------------------- | --------- | -------------------------------- |
| O         | ์ํ ์ถ์ฒ ๊ธฐ๋ฅ       | V         |                                  |
| O         | ์ปค๋ฎค๋ํฐ ๊ธฐ๋ฅ        | V         |                                  |
| O         | ์ํ ํ๊ฐ ๊ธฐ๋ฅ       | V         |                                  |
|           | ์ํ ๊ฒ์์ด ์๋์์ฑ | V         |                                  |
|           | ๋๋ค์ ์ ํ๊ธฐ        | V         |                                  |
|           | ๊ด๊ณ  ๊ธฐ๋ฅ            | X         | static ํ์ผ์ ์ ์๊ถ ๋ฌธ์ ๋ก ๋ณด๋ฅ |
|           | ์ํ ์ค์ผ์ค๋ฌ        | V         |                                  |
|           | ์นด์นด์คํก ๊ณต์         | V         |                                  |



### 3. ๋ฐ์ดํฐ๋ฒ ์ด์ค ๋ชจ๋ธ๋ง(ERD)



### ![img](https://lh3.googleusercontent.com/RPeD0nf82SzK4b_Mu51pXgKTheg4ynFcvpCP3EvPavjIO2KUNiZR9g6tny6KSzuDzz_--lcrN7UkbaccHsqbE8NfbRk-OG5njf_ZvtzKA2b8iRr-eK3_JgfvmZhrkwL4akzwqPJD)![img](https://lh5.googleusercontent.com/JTtmpERNgzXcgLs0-zn9SwmV18RG0JAzu_GxgSjLWPQv1W2f7V3LVLCE8_WvxWroBGGqEuWM_XRo1GG7CnfWvpNjW4tGdIuveOcGECtuOBItplOZviJwaBwSBudbN1eeOBlBAX3R)

   

### 4. ํ์ ๊ธฐ๋ฅ์ ๋ํ ์ค๋ช

   - ์ฒ์ ํ์๊ฐ์ ์์ ๋ช ๊ฐ์ ์ํ์ ๋ํด ํ์ ์ ๋งค๊ธธ ์ ์๋๋ก ํ๊ณ ,
   - ์ด๋ฅผ ๋ฐํ์ผ๋ก ์ ํธํ๋ ์ํ ์๋ฆฌ์ฆ๊ฐ ๋ฌด์์ธ์ง ๊ฒฐ์ , ์ด ์ํ ์๋ฆฌ์ฆ์ ํด๋นํ๋ ์ํ ์ค ํ์ ์ ์ฃผ์ง ์์ ์ํ๋ค์ ๋ณด์ง ์์ ์ํ๋ผ๊ณ  ๊ฐ์ฃผํ์ฌ ์ถ์ฒ
   - ์ต๋ช ๋๋ค์ ์ค์  ๊ธฐ๋ฅ: ์ ํธํ๋ ์ํ ์๋ฆฌ์ฆ๊ฐ ๊ฒฐ์ ๋๋ฉด, ๊ทธ ์๋ฆฌ์ฆ์ ํด๋นํ๋ ์บ๋ฆญํฐ๋ฅผ ๊ฒฐ์ ํ  ์ ์๋ ์ค๋ฌธ์ ์ฌ์ฉ์์๊ฒ ์ ์, ์ค๋ฌธ ๋ต๋ณ ๊ฒฐ๊ณผ๋ก ์ ํด์ง ์บ๋ฆญํฐ์ ๋ฌด์์ ํ์ฉ์ฌ๋ฅผ ์กฐํฉํ์ฌ ์ ์  ๋๋ค์ ๊ฒฐ์ .
   - ์ํ ์ค์ผ์ฅด๋ฌ: ์ํ์ ํ์์ ๊ด๊ณ๋ฅผ ์ด์ฉํ์ฌ ์ํ ๊ด๋ ์์๋ฅผ ์ฌ์ ์ ์ด๋์ ๋ ์ ํด๋ . ์ค์ ๋ก ์ํ๋ฅผ ๋ณด๊ณ ์ ํ๋ ์๊ฐ์ ๋ํ ์ ๋ณด๋ฅผ ์๋ ฅํ๋ฉด, ์ด ์กฐ๊ฑด์ ๋ง๋ ์ํ๋ค์ ๊ทธ ์๊ฐ์ ๋ง๊ฒ ๋ฐฐ์นํ์ฌ ์ฌ์ฉ์์๊ฒ ์ ์



### 5. ๋ฐฐํฌ ์๋ฒ URL
   - ๋ฐฑ์๋ ์๋ฒ : http://movie-pick.com/
   - ํ๋ก ํธ์๋ ์๋ฒ : https://moviepickvue.com/



## ๐ ๊ฐ๋ฐ์ผ์ง

- ๐5/20  (๋ชฉ)๐
  - ๊ธฐํ ํ์
    - ์ ๋ฐ์ ์ธ ๋์์ธ ์ปจ์ ๊ฒฐ์  
    - ์ญํ  ๋ถ๋ด
    - ๋ฐ์ดํฐ๋ฒ ์ด์ค ๋ชจ๋ธ๋ง
    - ๊ตฌํ ๊ธฐ๋ฅ ๊ตฌ์
    - ํ๋ก์ ํธ ์ผ์  ๊ณํ
  - ๋๋์ 
    - ๋ฐ์ดํฐ ๋ฒ ์ด์ค ๋ชจ๋ธ๋ง์ ์ด๋ฐ์ ๊ผผ๊ผผํ๊ฒ ํด๋์๋ ๊ฒ์ด ๋์์ด ๋ง์ด ๋์๋ค
    - ํ๋ก ํธ ์๋ ์์์ ํ๋ฉด์ ๋ฐฑ๋จ์์ ์ด๋ค ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง ๋ฐ์ดํฐ๊ฐ ๋์ด์ฌ ์ง๋ฅผ ์์ํ  ์ ์์๊ธฐ ๋๋ฌธ์ ๋ง์ ๋์์ด ๋์๋ค
    - ๋ด๊ฐ ํํ ์ฌ์ฉํ๋ API ๋ฌธ์ ํ๋๋ฅผ ๋ง๋ค๊ธฐ ์ํด์ ๋ฐฑ๊ณผ ํ๋ก ํธ๊ฐ ํ๋ฐํ๊ฒ ์ํตํด์ผ ํ๊ณ  ์๋ก ์ฆ์ ํผ๋๋ฐฑ์ด ํ์ํ๋ค๋ ๊ฒ 
    
    
  
- โจ5/21 (๊ธ)โจ
  
  - ๋ทฐ ํ๋ก์ ํธ ๊ตฌ์กฐ ์ค์ 
    - ๋ชจ๋ํํ์ฌ  3๊ฐ์ง๋ก ๋ถ๋ฆฌ 
      1. accounts
         1. ํ์๊ฐ์
         2. ์ค๋ฌธ์กฐ์ฌ
         3. ๋ก๊ทธ์ธ
         4. ํ๋กํ
      2. movies
         1. ์ํ ์ ์ฒด ๋ฆฌ์คํธ 
         2. ์ถ์ฒ ์ํ ๋ฆฌ์คํธ
         3. ์ํ ์ธ๋ถ ์ฌํญ
         4. ์ํ ํ๊ฐ ์ฝ๋ฉํธ
      3. reviews
         1.  ์ปค๋ฎค๋ํฐ ๊ฒ์๋ฌผ
         2. ๋๊ธ
  - ํ์๊ฐ์ ๊ตฌํ
    - ํ์๊ฐ์ ๊ณผ์ 
    - ์ ํธ ์ํ ์กฐ์ฌ >> ์ค๋ฌธ ์กฐ์ฌ >> ๊ฒฐ๊ณผ ๊ณต์ 
  - ๋๋์ 
    - SPA ๋ฅผ ๊ตฌํํ  ๋์๋ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด ๊ทธ๋ฅผ ์ฌ์ฌ์ฉ ํ๋ฏ๋ก ์ด๋ฐ์ ์ปดํฌ๋ํธ์ ์์/ ํ์ ๊ด๊ณ๋ฅผ ์ค์ ํ๋ ๊ฒ์ด ์ด๋ ค์ ๋ค 
    - ๋ถ๋ช ๋ง๋ค๋ฉด์ ์๋กญ๊ฒ ์ถ๊ฐ๋๋ ๊ฒ๋ ์์ํ์ง๋ง ์ด๋ฐ์ ํ์ ์ ์ก์๋์ด์ผ 
    - ๊ด๋ จ์ฑ์ด ๋์ ์์ฑ๊ณผ ๋ฉ์๋๋ฅผ ํ๋์ ๋ชจ๋๋ก ๋ถ๋ฆฌํ๋ ๊ฒ์ด ๊ฐ๋ฅํ๋ค๋ ์๊ฐ
    - ๋ง์น ํด๋์ค๋ฅผ ์์ง๋ ๋๊ฒ ๋์์ธํ๋ ๊ฒ๊ณผ ๋น์ทํ๊ฒ ๋๊ปด์ก๋ค 
    - ๊ทธ๋ฅผ ์ํด์๋ ๋ผ๋ฆฌ์ ์ผ๋ก ์๋ฏธ๋ฅผ ๋ถ๋ฆฌํ  ์ ์์ด์ผ ํ๋ค 
    - ๋ฌผ๋ก  ์ค๋ณต๋๋ ์์ญ์ด ์๋ ๊ฒ์ ์๋์ง๋ง 
    - ์ต๋ํ ์ํ์ ๊ด๋ จ๋ ์ผ์ ์ํ ๋ชจ๋๋ง์ด ํ๊ฒ ๋ง๋ค๊ณ  ์ปค๋ฎค๋ํฐ์ ๊ด๋ จ๋ ์ผ์ ์ปค๋ฎค๋ํฐ๋ง์ด ํ๋๋ก ๋ถ๋ฆฌํ๋ค.
    
    
  
- ๐5/22 (ํ )๐
  
  - accounts ์์ฑ ๋ฐ ๋ง๋ฌด๋ฆฌ
    - ํ์๊ฐ์ ์์ฑ 
    - ๋ก๊ทธ์ธ ์์ฑ
    - ์นด์นด์ค link (๊ณต์ ) ๊ตฌํ (๋ฐฐํฌ ์ดํ ์์  ํ์)
      - vue ์์ ์นด์นด์ค API ๋ฅผ ์ฌ์ฉํ  ๋์๋ Kakao ๋ณ์๋ฅผ ์ ์ญ ๋ณ์๋ฅผ ์ ์ธํด์ผ ํ๋ค
  - ์๋ ฅ form , detail ํ๋ฉด ์ถ๋ ฅํ  Modal ์ค์น 
    - modal ์ ๋ณด๋ ์ค์ ๋ค๋ฅธ ์ปดํฌ๋ํธ๋ก redirect ํ  ๊ฒฝ์ฐ์๋ ๊ผญ modal์ dispose ํด์ผ ํ๋ฉด์ด ๋จนํต์ด ๋์ง ์๋๋ค
  - ๋๋์ 
    - ์์ง ์๋ฒ์ ์ฐ๊ฒฐํ ์ํ๊ฐ ์๋๊ธฐ ๋๋ฌธ์ ๊ตฌํํ๋ฉด์ dummy data๋ฅผ ์ฌ์ฉ ํ๋ค
    - ์ถํ์ ์๋ฒ์ ์ฐ๊ฒฐํ๊ณ  ๋๋ฉด ๋ด๊ฐ ์ฌ์ฉํ attribute ๊ฐ์ ์ ๋ฐ์ ์ผ๋ก ์์ ํด์ผ ํ๋ค.
    - ์ฒ์์ dummy data๋ฅผ ๋ง๋ค ๋ ๋ถํฐ ์ค์ ๋ก response๋ก ๋ฐ๊ฒ๋๋ data ๊ฐ์ฒด์ ์ต๋ํ ๋น์ทํ๊ฒ ๋ง๋ค๋ฉด ์ข๊ฒ ์ง๋ง 
    - ์์ง ๋ฐฑ๋จ๋ ๊ตฌํ ์ค์ด๊ธฐ ๋๋ฌธ์ ํ๊ณ๊ฐ ์์ผ๋ฏ๋ก 
    - ๋์ค์ ๋น ์ง์์ด ์์ ํ๋ ๊ฒ์ด ๊ด๊ฑด (์ถ๋ ฅ๋์ด์ผ ํ  ์ ๋ณด๊ฐ ์ถ๋ ฅ๋์ง ์๋ ๋ถ์์ฌ๊ฐ ๋ฒ์ด์ง ์ ์๊ธฐ ๋๋ฌธ์)
    - ์ธ๋ถ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ  ๋์๋ ๊ณต์ ๋ฌธ์๋ฅผ ๋ฐ์ด๋ธ๋ก ์ฌ๊ธฐ๊ณ  ์์งํด์ผ ๋ด ๋ป๋๋ก ์ฌ์ฉํ  ์ ์๋ค๋ ์ ์ ๋ผ์ ๋ฆฌ๊ฒ ๋๊ผ๋ค 
    - Vue instance์ llife cycle๋ฅผ ์ดํดํ ์ํฉ์ด ์๋๋ฉด ์ ์ฝ๋๊ฐ ๋ป๋๋ก ๋์ํ์ง ์๋์ง ์ดํดํ  ์๊ฐ ์์ด์ ๋ฌธ์๋ฅผ ๋ณด๋ฉด์ 
    - ์ด๋ ์์ ์ ๊ฐ์ฒด๋ ๋ฉ์๋๋ฅผ call ํด์ผ ํ ์ง๋ฅผ ๊ฒฐ์ ํ๋ค. 
    - ์ด๋ ์์ผ๋ก ํ๋ก์ ํธ๋ฅผ ํ  ๋์๋ ๊ผญ ์ผ๋์ ๋๊ณ  ๊ตฌํํด์ผ ํ  ๋ฏ ํ๋ค.
    
    
  
- ๐5/23 (์ผ)๐ฉณ
  
  - movie page ๊ตฌํ 
    - ์ํ ๋ชฉ๋ก ์กฐํ 
    - ์ํ ์์ธ 
    - ์ํ ๊ฒ์ + ์๋์์ฑ (์งํ์ค)
    - ์ํ ์ฐํ๊ธฐ (์์ ์ค)
  - ๋๋์ 
    - ๊ธฐ์กด์ ์กด์ฌํ๋ ๋ชจ๋/๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํ์ค์ธ๋ฐ
    - ์ ๋ง์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์์ ์ด๋ค ๊ฒ์ด ์ข์์ง ์์ ๋ณด๋ ๋์ด ํ์ํ ๋ฏ ํ๋ค 
    - ๋ง์ ์ฌ๋์ด ์ด๋ฏธ ์ฌ์ฉํ๊ณ  ์์ ์๋ก ๋ฌธ์ ๋ฅผ ๋ง๋ฌ์ ๋์ ๋ ํผ๋ฐ์ค๋ฅผ ์ฐพ๊ธฐ๊ฐ ์ข์ 
    - ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๋ค์ด๋ก๋ ์๋ฅผ ๊ฐ์ํ์ฌ ์ ํํ๋ค
    - ์์ ํ  ๋๋ง ํ์ฌ๋ ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋๋ฅผ ๋ง์ด ์ฌ์ฉํ๊ณ  ์ถ์๋๋ฐ 
    - ํ์  ๋ฑ๋ก์ ์ํ star rating ์ ์ง์  ๋ง๋ค์ด ๋ณด๋ ค๋ค๊ฐ ํฌ๊ธฐํ์๋ค 
    - ์์ง ์๋ฒ์์ ์ฐ๊ฒฐ์ ์๊ฐํ์ง ์๊ณ  ๋ด๊ฐ ๊ฐ์ง ๋ฐ์ดํฐ๋ก ์ถ๋ ฅ์ด ๋๋์ง๋ฅผ ํ์ธํ๊ณ  ์๋๋ฐ 
    - ๋์ค์ ๋น๋๊ธฐ ์ฐ๊ฒฐ์ axios ๋ก ํ  ๋์ ๊ผผ๊ผผํ๊ฒ ์ฐ๊ฒฐํด์ผ ํ๋ฏ๋ก ์ฃผ์์ ์จ๋์๊ณ  
    - drf ๋ผ๋ js  ๋ฌธ์๋ก ๊ฒฝ๋ก ํ์ผ์ ๋ฐ๋ก ๊ด๋ฆฌํ๊ณ  ์๋ค.
    - ๋ํ์ผ ํ์ด์ง์ ์ ํ๋ธ API๋ก ํธ๋ ์ผ๋ฌ๋ฅผ ๋ฃ์๊น ํ์๋๋ฐ 
    - ๊ฒ์ํ ๋์์์ด ํธ๋ ์ผ๋ฌ๋ผ๋ ๋ณด์ฅ์ด ์์ด์ (search query  ๋ฅผ ์ด๋ป๊ฒ ๋์ ธ์ผ ํ ์ง) ๋ณด๋ฅ
    - ์ ์๊ฐ์ด ์ ๋ฐ์ ์ผ๋ก ์ค๋ ๊ฑธ๋ฆด๊น ์๊ฐํด๋ณด์๋๋ฐ, ๋์์ธ์ ์ด๋ป๊ฒ ํ ์ง ์คํ ๋ฆฌ ๋ณด๋ ๋๋ ์์ด์ดํ๋ ์์ ์์ฑํ์ง ์์ ์ฑ๋ก ์์ํด์ ๊ทธ๋ฐ ๋ฏ ํ๋ค
    - 2ํ๊ธฐ ํ๋ก์ ํธ๋ฅผ ํ  ๋์๋ ์ด๋ฐ์ ์์ด์ด ํ๋ ์์ ๊ผญ ์์ฑํด์ผ์ง 
    - ์์์ผ์ ์ปค๋ฎค๋ํฐ๋ฅผ ๊ตฌํํ  ๋์๋ ๋์์ธ์ ์ผ๋ก ํ์ ๋นผ๊ณ  ๋น ๋ฅด๊ฒ ์ณ๋ด๋ ๊ฒ์ ์ง์คํ  ์๊ฐ์ด๋ค.
    
    
  
- ๐ช5/24 (์)๐ช
  
  - community CRUD ์์ฑ
  - ๊ฒ์๊ธ ๋๊ธ CRUD ์์ฑ
  - ๋๋์ 
    - ์ ์ผ ๊ณจ์น ์ํ ๋ ๋ถ๋ถ์ ์์  ๋ถ๋ถ์ด์๋ค.
    - ์๋ ์์ ๊ฐ์ input value ์ ์ด๊ธฐํ ํ์ฌ ์ฌ์ฉํ๋ ค ํ์๋๋ฐ
    - vue ์์๋ textarea ์ ๊ฒฝ์ฐ  v-model ์ ์ฐ๋ํ์ฌ ๊ฐ์ ์ฃผ์ํด์ผ ํ๋ค
    - ๊ทธ๋ฐ๋ฐ ๋ด๊ฐ ๋ชจ๋ฌ์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ฌธ์ ๊ฐ ๋์๋ค
    - ๋ชจ๋ฌ์ ๋์ ๋ณด์ด์ง ์์ ๋ฟ ๋ด๊ฐ ์์ ํ๊ธฐ ๋ํ์ผ์ ํธ์ถํ๊ธฐ ์ด์ ์ ์ด๋ฏธ created ์  mounted ๊ฐ ๋๋์๋ ์ํฉ์ด์๊ธฐ ๋๋ฌธ์
    - ๋ด๊ฐ data์ ๊ธฐ๋ณธ๊ฐ์ ์ฃผ์ด์ผ ํ๋ ์์ ์ด ๋ฌธ์ ๊ฐ ๋์๋ค 
    - ๋ชจ๋ฌ์ด  show ๋ ํ์ ํ์ฑํ๊ฐ ๋๋ฉด updated ๊ฐ ๋๊ธฐ ๋๋ฌธ์ (data์ ๋ณ๊ฒฝ์ผ๋ก ์ธํด)
    - updated ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ ๋ฌด์์  data ๋ฅผ ์ฃผ์ํ๋ฉด 
    - ๋ด๊ฐ ๋ชจ๋ฌ ์์ input field ์ ๊ฐ์ ์๋ ฅ ํ  ๋๋ง๋ค data ์ ๋ณํ๊ฐ ์๊ธฐ๊ณ  ๊ทธ๋ฌ๋ฉด updated ๋ฉ์๋๊ฐ ํธ์ถ๋๋ฉด์ ๊ฐ์ด ์ด๊ธฐํ ๋๋ ๋ฌธ์ ์ ์ด ๋ฐ์ํ๋ค
    - ๋ฐ๋ผ์ created ๊ฐ ๋  ๋์ ๋ง๋ ์ ๋๋ ๊ฐ์ (!@#$) ์๋ ฅํด๋๊ณ  
    - ์ด๊ธฐ๊ฐ (!@#$) ์ผ ๋๋ง default ๊ฐ (์์  ์  ๋ด์ฉ) ์ ์ฃผ์ํ๋ค
    - vue ๋ฅผ ์ฌ์ฉํ๋ค๋ณด๋ฉด undefined ๋ฅผ ๋ง๋๊ฒ ๋๋ ์๊ฐ์ด ๋ง์๋ฐ 
    - vue ๊ฐ์ฒด์ life cycle ์ ์ ๊ณ ๋ คํด์ผ ํ๋ค๋ ์ ์ ๋ค์ ํ ๋ฒ ์ฃผ์
    - ์์ฝ๊ฒ ๋๊ปด์ง๋ ์ ์, ์์ฑ form ๊ณผ ์์  form ์ ์ถฉ๋ถํ ํฉ์ณ์ ํ๋์  form ์ผ๋ก ์ฌ์ฌ์ฉํ  ์ ์์์ ๊ฒ ๊ฐ์๋ฐ ์ ๋ป ์ด๋ป๊ฒ ํด์ผํ ์ง ๋ชจ๋ฅด๊ฒ ์ด์ ๊ทธ๋ฅ ๋ถ๋ฆฌํ๋ค
    - input hidden tag ์ ๊ฐ์ ๋ฃ์ด๋๊ณ  value ๊ฐ์ ๋ฐ๋ผ์ update ์ด๊ฑฐ๋ create ๋ผ๊ณ  ํ๋จํด๋ ๋  ๊ฒ ๊ฐ๊ณ 
    - ์๋๋ฉด update  ํ  ๊ฒฝ์ฐ์ state ์ update ๊ฐ์ฒด๋ฅผ ์ฌ๋ ค๋๊ณ  (default ๋ ๋น ๊ฐ์ฒด {}) 
    - getters:Objects.key(object).length ํ์ฌ ๋น ๊ฐ์ฒด๊ฐ ์๋๋ผ๋ฉด update ์ํฉ์ด๋ผ๊ณ  ๊ฐ์ 
      - object ๊ฐ ์๋๋ผ null ์ํฉ์ผ ๋์๋ ์์ ํจ์๊ฐ call ๋  ์ ์์ ์ฃผ์ 
      - && ๋จ์ถ ํ๊ฐ๋ฅผ ์ฌ์ฉํ์ฌ if (object&&Object.keys(object).length) ํด์ผ ์ ์ ์๋
    - ์ข์์ ๋ฒํผ์ ๊ตฌํ ํ  ๋์.. v-if ๋ก ์กฐ๊ฑด๋ฌธ ๋ถ๊ธฐ ํ  ๊ฒ์ด ์๋๋ผ classList toggle ํ๋ ๊ฒ๋ ์ข์์ ๊ฒ์ด๋ค  
    
    
- 5/25 (ํ)
  - Full calendar ์ ์ฉํ์ฌ profile page ์์ฑ
  
  - ๋๋์ 
  
    - ๋ฉ๋ถ์ ์ฐ์์ด์๋ ๊ฒ์ 
    - ๋ด๊ฐ promise ๋ฅผ ์ฌ์ฉํ๋ ์ด์ ๋ฅผ ๊ฐ๊ณผํ๋ ์ 
    - request๋ฅผ ๋ณด๋ด๊ณ  response๊ฐ ๋์์ค๊ธฐ ์ ์ javascript ๊ฐ ์คํ์ ๋ค๋ฅธ ํจ์๋ค์ ๋จผ์  ์คํํ๋ฏ๋ก (๋์์ฑ ๋ชจ๋ธ)
    - ๋๋ ๋นํ๋ฉด์ ๋ง๋์ผ๋ง ํ๋ ๊ฒ์ด๋ค
    - ๋ฐ๋ผ์ axios ์ then ํจ์๋ค์ ๋ฉ์๋ ์ฒด์ด๋ ํ์ฌ
    -  response ๊ฐ ๋์์์ ๋ actions ์ call ํ๋ ์์ผ๋ก ํด๊ฒฐํ์๋ค
    - script ๋ฅผ ์ ์ญ์ผ๋ก ํ์ฉํ  ์ ์์์ ๋์๋ ํจ์๋ฅผ call ํ๊ฑฐ๋ ํน์  ์ด๋ฒคํธ๋ฅผ trigger ํ๋ ๊ฒ์ด ํธ๋ฆฌํ๋๋ฐ
    - vue ํ๋ ์์ํฌ ๋ด๋ถ์์ ํน์  DOM ์ event ๋ฅผ trigger ํ๋ ๊ฒ์ด ๋๋ฌด ๋ถํธํ๋ค
    -  state ๋ฅผ ์ฌ์ฉํ์ฌ ์ด์ฐ์ ์ฐ ํด๊ฒฐํ๊ธฐ๋ ํ์ฐ๋ง
    - ๊ทธ๋ฆฌ๊ณ  ๋ฌดํ ์คํฌ๋กค์ ๋ฌ ๋์๋ SPA ์ด๋ค ๋ณด๋ 
    - ๋ด๊ฐ ์ํ๋ ํ์ด์ง๊ฐ 1ํ์ด์ง์๊ณ  ์ด ๊ณณ์์๋ง ๋ฌดํ ์คํฌ๋กค์ ํ๊ณ  ์ถ์๋๋ฐ
    - vue ๊ธฐ์ค 1ํ์ด์ง = 2ํ์ด์ง ์ด๊ธฐ ๋๋ฌธ์ 2ํ์ด์ง์์๋ ๋ฌดํ ์คํฌ๋กค์ด ์ผ์ด๋๋ ๋ญํจ๊ฐ...
    - ๊ทธ๋์ ๋ฆฌ๋ทฐํ์ด์ง์์ ์คํฌ๋กค์ ํ๊ณ  ์๋๋ฐ ๋ฌด๋น ํ์ด์ง ๋ํ ์คํฌ๋กค์ด end ๋ฅผ ๋ง๋ฌ๋ค๊ณ  ํ๋จํ์ฌ ์ํ๋ฅผ ์๋ก load ํด์ค๋ ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ค
    - ํ์ด์ง ๋ผ์ฐํฐ๊ฐ ์ด๋ํ  ๋์ create ๋๋ ๊ฒ์ ์ด์ฉํ์ฌ state ์ ํ์ฌ ํ์ด์ง ๊ฐ์ ์ ํด๋๊ณ  ๋ด๊ฐ ํ์ฌ 1ํ์ด์ง์ ์์ ๋์๋ 1ํ์ด์ง์ ์คํฌ๋กค ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋๋ก ์ ํํ๋ค
    - vue ๋./.. ์ฐธ ์ ๊ธฐํ๊ธฐ๋ ํ๊ณ 
    - ํ์คํ ์ํ๊ด๋ฆฌ๋ฅผ ํตํด ์ ์ฒด์ ์ผ๋ก ๋ณํ๋ฅผ ๋ฐ์ํ์ฌ ์ฃผ๋ ๊ฒ์ ํฐ ์ฅ์ ์ด๋ค
    - ์์๋๋ก ์๋ํ์ง ์๋ ๊ฒ์ ๋ด ์ด๋ก  ๊ณต๋ถ์ ๋ถ์กฑ์ด๋ค 
    - ์๋์์ฑ์ด ๋ด ๋ป๋๋ก ๋์ง ์๊ณ  ์๋ค 
    - ์ญ์๋ ๋ฉ์๋๊ฐ ์คํ๋๊ณ  ์๋ฒ์ ํต์ ํ๊ณ  ๋์์ค๋ ๊ณผ์ ์์
    - '์ '์ ์๋ ฅํ๋ฉด ์ ์ด ํฌํจ๋ ๋ฆฌ์คํธ๋ฅผ ์๋ฒ์์ ๋ค๊ณ ์ค์ง๋ง 
    - ๊ทธ ์ฌ์ด์ ๋๋ '์ ์ ' ๋ฅผ ์๋ ฅํ์๊ธฐ ๋๋ฌธ์ ์๋์์ฑ ๋ฆฌ์คํธ๊ฐ ํผ์ณ์ง์ง ์๋ ๋ฌธ์ ๊ฐ ์๋ค
  
    
- ๐ฒ5/26 (์)๐ฒ
  - ํด๊ฒฐํ ๊ฒ๋ค
  
  - ์ค์ผ์ค๋ฌ
  
    - ๊ณต์ ๋ฌธ์๋ฅผ ์ฐธ๊ณ ํ์ฌ ๋ค ๋๋ ค ๋ฐ์๋ค
  
  - ์ํ ์ฐํ๊ธฐ
  
    - ์ฐํ๊ธฐ ๋ฒํผ์ด ๋ฐ์์ด ๋  ๋๊ฐ ์๊ณ  ์ ๋  ๋๊ฐ ์์ด์ (์๊น ๋ณํ)
    - ๋ํ์ผ์ ๋ถ๋ฌ์ฌ ๋๋ง๋ค ํ๋กํ URL์ ๋ฆฌํ์คํธ๋ฅผ ๋ณด๋ด์ ๋ด๊ฐ ํ์ฌ ๋ณด๊ณ  ์๋ ์ฌํ ๊ฐ์ฒด๊ฐ ์ฐํ ์ํ์ธ์ง๋ฅผ ๋งค๋ฒ ํ์ธํ๋๋ก ๋ณ๊ฒฝํ๋ค
    - ์ด๋ ๊ฒ ๋งค๋ฒ ์์ฃผ ์์ฒญ์ ๋ณด๋ด๋ ๋๋ ๊ฒ์ผ๊ฐ?
    - ํ ๋ฒ์ ์๋ฐํ๊ฒ ์ฑ๊ฒจ์ค๊ณ  ์ถ์์ง๋ง ๊ฐ์ด ๊ฐฑ์ ๋ ๊ฒ์ ๋ฐ์ํ๊ธฐ ์ํด์๋ ํ๋กํ์ ๋ค๋์ค๋ ์๋ฐ์ ์๋ค๊ณ  ๊ฒฐ๋ก  ์ง์๋ค
    - ๊ทธ๋ฆฌ๊ณ  ํ๋กํ์ ๋ค๋์ฌ ๋ axios then ์ ๋ฉ์๋ ์ฒด์ด๋ ํ์ฌ 
    - ํ๋กํ ๋ค๋์ค๊ธฐ >> ์๋ตํ๋ฉด movie_to_see ๊ฐ์ฒด ๊ฐฑ์  >> ๊ฐฑ์ ์ด ๋๋๋ฉด ๋ณํ ๋ฐ์
  
  - ๋ฌดํ ์คํฌ๋กค
  
    - ํ์ด์ง๋ค์ด์์ ์๋ฒ์์ ํด์ฃผ๊ธฐ ๋๋ฌธ์ ์์ํ๊ฒ ๋๋ฌ๋ค
    - ์๋ ํ์ด์ง ๋๋ฒ๋ฅผ ํด๋ฆญํด์ ํ์ด์ง๋ฅผ ๋๊ธฐ๋ ๋ฐฉ์์ผ๋ก ๊ตฌํํ  ๊ฐ ํ๋๋ฐ
    - ํ์ด์ง ๋๋ฒ๋ฅผ ๋งค๋ฒ ๊ณ์ฐํด์ฃผ๊ธฐ๊ฐ ๋๋ฌด ์ซ์ด์ 
    - django ์์ dtl ์ฐ๊ณ  template ์ธ ๋์๋ django ๊ฐ ์์์ ์ ์ฒด ๊ฒ์๋ฌผ ์, offset, ํ์ฌ ํ์ด์ง ๊ณ ๋ คํด์ ํ์ด์ง๋ค์ด์ ์์ ๋๋ฒ์ ๋ ๋๋ฒ๋ฅผ ์๋์ผ๋ก ๊ณ์ฐํด์คฌ๋๋ฐ 
    - ์ด๋ฅผ ์๋ฒ์์ ํ์ด์ง๋ค์ด์ ํด๋์ค ํ๋ ํ์ ๊ณ์ฐํด๋ฌ๋ผ๊ณ  ๋งํ๊ธฐ์๋ ๋ฌด๋ฆฌ๊ฐ ์์๊ณ 
    -  DRF ์์ ์ด๋ป๊ฒ ์ฒ๋ฆฌํด์ฃผ๋ ์ง ๋ชจ๋ฅผ ์ผ์ด๋ผ 
    - ๋ฌดํ ์คํฌ๋กค์ ํ๋ฉด offset ์ผ๋ก ๋ค์ ๊ฒ์๋ฌผ ๋ฆฌ์คํธ๋ฅผ ๊ธฐ์กด์ ๋ฆฌ์คํธ์ push ํด์ฃผ๋ ๊ฒ์ผ๋ก ๊ตฌํ์ด ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์ ํธ๋ฆฌํ๋ค
    - ๊ทธ๋ฆฌ๊ณ  ์์ฆ ์ฌ์ดํธ ๋ค์ด ๋ฌดํ ์คํฌ๋กค์ ๋ง์ด ํ๋๊น...
    - ๋ชจ๋ฐ์ผ ์นํ์ ์ด๊ธฐ ๋๋ฌธ์ธ๊ฐ ๋ผ๊ณ  ๋ง์ฐํ ์๊ฐํ๋ค
  
  - ์๋์์ฑ
  
    - ๊ณต์ ๋ฌธ์๋ฅผ ๋ค์ ํ์ด ๋ณด์๋ค 
    - ๊ตณ์ด actions ์๊ฒ ์ฒ๋ฆฌ๋ฅผ ๋๊ธฐ์ง ์๊ณ 
    - ์ปดํฌ๋ํธ ์์ญ ์์์ axios ๋ฅผ import ํ์ฌ 
    - ๋ฐ๋ก ํ๋ก๋ฏธ์ค ๊ฐ์ฒด ์์ฒด๋ฅผ ๋ฐํํ๋ ์์ผ๋ก ํด๊ฒฐํ๋ค
    - ๋ชจ๋์ ๊ณต์๋ฌธ์๋ฅผ ๋ณด๋ return ๊ฐ์ผ๋ก ํ๋ก๋ฏธ์ค๋ฅผ ํ์ฉํ๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก ๋ณํ ์ ์ฐจ ์์ด ๋ฐํ์ด ๊ฐ๋ฅํ๋ค
  
    

- ๐5/27 (๋ชฉ)๐
  - ๋ฐฐํฌ
    - Netlify
    - domain ๊ตฌ๋งค
    - https ์ธ์ฆ
  - ๋ฐํ PPT ์์ฑ