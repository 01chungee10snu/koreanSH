// Data Definitions
const CONSONANTS = [
    { name: '기역', file: '자음_01_기역.png', code: 0, char: 'ㄱ' },
    { name: '니은', file: '자음_02_니은.png', code: 2, char: 'ㄴ' },
    { name: '디귿', file: '자음_03_디귿.jpeg', code: 3, char: 'ㄷ' },
    { name: '리을', file: '자음_04_리을.png', code: 5, char: 'ㄹ' },
    { name: '미음', file: '자음_05_미음.png', code: 6, char: 'ㅁ' },
    { name: '비읍', file: '자음_06_비읍.jpeg', code: 7, char: 'ㅂ' },
    { name: '시옷', file: '자음_07_시옷.jpeg', code: 9, char: 'ㅅ' },
    { name: '이응', file: '자음_08_이응.jpeg', code: 11, char: 'ㅇ' },
    { name: '지읒', file: '자음_09_지읒.png', code: 12, char: 'ㅈ' },
    { name: '치읓', file: '자음_10_치읓.jpeg', code: 14, char: 'ㅊ' },
    { name: '키읔', file: '자음_11_키읔.jpeg', code: 15, char: 'ㅋ' },
    { name: '티읕', file: '자음_12_티읕.png', code: 16, char: 'ㅌ' },
    { name: '피읖', file: '자음_13_피읖.png', code: 17, char: 'ㅍ' },
    { name: '히읗', file: '자음_14_히읗.jpeg', code: 18, char: 'ㅎ' },
    { name: '쌍기역', file: '자음_15_쌍기역.png', code: 1, char: 'ㄲ' },
    { name: '쌍디귿', file: '자음_16_쌍디귿.png', code: 4, char: 'ㄸ' },
    { name: '쌍비읍', file: '자음_17_쌍비읍.png', code: 8, char: 'ㅃ' },
    { name: '쌍시옷', file: '자음_18_쌍시옷.png', code: 10, char: 'ㅆ' },
    { name: '쌍지읒', file: '자음_19_쌍지읒.png', code: 13, char: 'ㅉ' }
];

const VOWELS = [
    { name: '아', file: '모음_01_아.png', code: 0, char: 'ㅏ', type: 'v' },
    { name: '야', file: '모음_02_야.png', code: 2, char: 'ㅑ', type: 'v' },
    { name: '어', file: '모음_03_어.png', code: 4, char: 'ㅓ', type: 'v' },
    { name: '여', file: '모음_04_여.png', code: 6, char: 'ㅕ', type: 'v' },
    { name: '오', file: '모음_05_오.jpeg', code: 8, char: 'ㅗ', type: 'h' },
    { name: '요', file: '모음_06_요.png', code: 12, char: 'ㅛ', type: 'h' },
    { name: '우', file: '모음_07_우.jpeg', code: 13, char: 'ㅜ', type: 'h' },
    { name: '유', file: '모음_08_유.jpeg', code: 17, char: 'ㅠ', type: 'h' },
    { name: '으', file: '모음_09_으.png', code: 18, char: 'ㅡ', type: 'h' },
    { name: '이', file: '모음_10_이.png', code: 20, char: 'ㅣ', type: 'v' },
    { name: '애', file: '모음_11_애.png', code: 1, char: 'ㅐ', type: 'v' },
    { name: '얘', file: '모음_12_얘.png', code: 3, char: 'ㅒ', type: 'v' },
    { name: '에', file: '모음_13_에.png', code: 5, char: 'ㅔ', type: 'v' },
    { name: '예', file: '모음_14_예.png', code: 7, char: 'ㅖ', type: 'v' },
    { name: '와', file: '모음_15_와.png', code: 9, char: 'ㅘ', type: 'h' },
    { name: '왜', file: '모음_16_왜.png', code: 10, char: 'ㅙ', type: 'h' },
    { name: '외', file: '모음_17_외.png', code: 11, char: 'ㅚ', type: 'h' },
    { name: '워', file: '모음_18_워.png', code: 14, char: 'ㅝ', type: 'h' },
    { name: '웨', file: '모음_19_웨.png', code: 15, char: 'ㅞ', type: 'h' },
    { name: '위', file: '모음_20_위.png', code: 16, char: 'ㅟ', type: 'h' },
    { name: '의', file: '모음_21_의.jpeg', code: 19, char: 'ㅢ', type: 'h' }
];

// Quiz Data - Expanded to ~300 words
const QUIZ_WORDS = [
    // Animals (동물)
    { word: '사자', emoji: '🦁', sound: '사자' },
    { word: '호랑이', emoji: '🐯', sound: '호랑이' },
    { word: '곰', emoji: '🐻', sound: '곰' },
    { word: '토끼', emoji: '🐰', sound: '토끼' },
    { word: '나비', emoji: '🦋', sound: '나비' },
    { word: '소', emoji: '🐮', sound: '소' },
    { word: '돼지', emoji: '🐷', sound: '돼지' },
    { word: '강아지', emoji: '🐶', sound: '강아지' },
    { word: '고양이', emoji: '🐱', sound: '고양이' },
    { word: '오리', emoji: '🦆', sound: '오리' },
    { word: '닭', emoji: '🐔', sound: '닭' },
    { word: '양', emoji: '🐑', sound: '양' },
    { word: '말', emoji: '🐴', sound: '말' },
    { word: '원숭이', emoji: '🐵', sound: '원숭이' },
    { word: '쥐', emoji: '🐭', sound: '쥐' },
    { word: '판다', emoji: '🐼', sound: '판다' },
    { word: '코알라', emoji: '🐨', sound: '코알라' },
    { word: '개구리', emoji: '🐸', sound: '개구리' },
    { word: '거북이', emoji: '🐢', sound: '거북이' },
    { word: '뱀', emoji: '🐍', sound: '뱀' },
    { word: '문어', emoji: '🐙', sound: '문어' },
    { word: '오징어', emoji: '🦑', sound: '오징어' },
    { word: '새우', emoji: '🦐', sound: '새우' },
    { word: '물고기', emoji: '🐟', sound: '물고기' },
    { word: '고래', emoji: '🐳', sound: '고래' },
    { word: '상어', emoji: '🦈', sound: '상어' },
    { word: '돌고래', emoji: '🐬', sound: '돌고래' },
    { word: '게', emoji: '🦀', sound: '게' },
    { word: '달팽이', emoji: '🐌', sound: '달팽이' },
    { word: '벌', emoji: '🐝', sound: '벌' },
    { word: '무당벌레', emoji: '🐞', sound: '무당벌레' },
    { word: '개미', emoji: '🐜', sound: '개미' },
    { word: '거미', emoji: '🕷️', sound: '거미' },
    { word: '전갈', emoji: '🦂', sound: '전갈' },
    { word: '모기', emoji: '🦟', sound: '모기' },
    { word: '파리', emoji: '🪰', sound: '파리' },
    { word: '공룡', emoji: '🦖', sound: '공룡' },
    { word: '용', emoji: '🐉', sound: '용' },
    { word: '유니콘', emoji: '🦄', sound: '유니콘' },
    { word: '낙타', emoji: '🐫', sound: '낙타' },
    { word: '기린', emoji: '🦒', sound: '기린' },
    { word: '코끼리', emoji: '🐘', sound: '코끼리' },
    { word: '하마', emoji: '🦛', sound: '하마' },
    { word: '코뿔소', emoji: '🦏', sound: '코뿔소' },
    { word: '얼룩말', emoji: '🦓', sound: '얼룩말' },
    { word: '캥거루', emoji: '🦘', sound: '캥거루' },
    { word: '사슴', emoji: '🦌', sound: '사슴' },
    { word: '여우', emoji: '🦊', sound: '여우' },
    { word: '늑대', emoji: '🐺', sound: '늑대' },
    { word: '너구리', emoji: '🦝', sound: '너구리' },
    { word: '다람쥐', emoji: '🐿️', sound: '다람쥐' },
    { word: '수달', emoji: '🦦', sound: '수달' },
    { word: '나무늘보', emoji: '🦥', sound: '나무늘보' },
    { word: '고슴도치', emoji: '🦔', sound: '고슴도치' },
    { word: '박쥐', emoji: '🦇', sound: '박쥐' },
    { word: '부엉이', emoji: '🦉', sound: '부엉이' },
    { word: '독수리', emoji: '🦅', sound: '독수리' },
    { word: '앵무새', emoji: '🦜', sound: '앵무새' },
    { word: '백조', emoji: '🦢', sound: '백조' },
    { word: '홍학', emoji: '🦩', sound: '홍학' },
    { word: '비둘기', emoji: '🕊️', sound: '비둘기' },
    { word: '칠면조', emoji: '🦃', sound: '칠면조' },
    { word: '펭귄', emoji: '🐧', sound: '펭귄' },
    { word: '병아리', emoji: '🐥', sound: '병아리' },
    { word: '염소', emoji: '🐐', sound: '염소' },
    { word: '물소', emoji: '🐃', sound: '물소' },
    { word: '라마', emoji: '🦙', sound: '라마' },
    { word: '스컹크', emoji: '🦨', sound: '스컹크' },
    { word: '오소리', emoji: '🦡', sound: '오소리' },

    // Fruits & Food (음식)
    { word: '사과', emoji: '🍎', sound: '사과' },
    { word: '포도', emoji: '🍇', sound: '포도' },
    { word: '바나나', emoji: '🍌', sound: '바나나' },
    { word: '수박', emoji: '🍉', sound: '수박' },
    { word: '딸기', emoji: '🍓', sound: '딸기' },
    { word: '복숭아', emoji: '🍑', sound: '복숭아' },
    { word: '우유', emoji: '🥛', sound: '우유' },
    { word: '빵', emoji: '🍞', sound: '빵' },
    { word: '밥', emoji: '🍚', sound: '밥' },
    { word: '치즈', emoji: '🧀', sound: '치즈' },
    { word: '사탕', emoji: '🍬', sound: '사탕' },
    { word: '초콜릿', emoji: '🍫', sound: '초콜릿' },
    { word: '쿠키', emoji: '🍪', sound: '쿠키' },
    { word: '케이크', emoji: '🍰', sound: '케이크' },
    { word: '도넛', emoji: '🍩', sound: '도넛' },
    { word: '아이스크림', emoji: '🍦', sound: '아이스크림' },
    { word: '피자', emoji: '🍕', sound: '피자' },
    { word: '햄버거', emoji: '🍔', sound: '햄버거' },
    { word: '감자튀김', emoji: '🍟', sound: '감자튀김' },
    { word: '핫도그', emoji: '🌭', sound: '핫도그' },
    { word: '팝콘', emoji: '🍿', sound: '팝콘' },
    { word: '샌드위치', emoji: '🥪', sound: '샌드위치' },
    { word: '타코', emoji: '🌮', sound: '타코' },
    { word: '부리토', emoji: '🌯', sound: '부리토' },
    { word: '계란', emoji: '🥚', sound: '계란' },
    { word: '고기', emoji: '🥩', sound: '고기' },
    { word: '치킨', emoji: '🍗', sound: '치킨' },
    { word: '소시지', emoji: '🌭', sound: '소시지' },
    { word: '도시락', emoji: '🍱', sound: '도시락' },
    { word: '주먹밥', emoji: '🍙', sound: '주먹밥' },
    { word: '국수', emoji: '🍜', sound: '국수' },
    { word: '스파게티', emoji: '🍝', sound: '스파게티' },
    { word: '초밥', emoji: '🍣', sound: '초밥' },
    { word: '만두', emoji: '🥟', sound: '만두' },
    { word: '카레', emoji: '🍛', sound: '카레' },
    { word: '샐러드', emoji: '🥗', sound: '샐러드' },
    { word: '옥수수', emoji: '🌽', sound: '옥수수' },
    { word: '당근', emoji: '🥕', sound: '당근' },
    { word: '감자', emoji: '🥔', sound: '감자' },
    { word: '고구마', emoji: '🍠', sound: '고구마' },
    { word: '오이', emoji: '🥒', sound: '오이' },
    { word: '브로콜리', emoji: '🥦', sound: '브로콜리' },
    { word: '버섯', emoji: '🍄', sound: '버섯' },
    { word: '양파', emoji: '🧅', sound: '양파' },
    { word: '마늘', emoji: '🧄', sound: '마늘' },
    { word: '고추', emoji: '🌶️', sound: '고추' },
    { word: '체리', emoji: '🍒', sound: '체리' },
    { word: '레몬', emoji: '🍋', sound: '레몬' },
    { word: '오렌지', emoji: '🍊', sound: '오렌지' },
    { word: '파인애플', emoji: '🍍', sound: '파인애플' },
    { word: '망고', emoji: '🥭', sound: '망고' },
    { word: '키위', emoji: '🥝', sound: '키위' },
    { word: '토마토', emoji: '🍅', sound: '토마토' },
    { word: '코코넛', emoji: '🥥', sound: '코코넛' },
    { word: '아보카도', emoji: '🥑', sound: '아보카도' },
    { word: '가지', emoji: '🍆', sound: '가지' },
    { word: '콩', emoji: '🫛', sound: '콩' },
    { word: '땅콩', emoji: '🥜', sound: '땅콩' },
    { word: '밤', emoji: '🌰', sound: '밤' },
    { word: '꿀', emoji: '🍯', sound: '꿀' },
    { word: '물', emoji: '💧', sound: '물' },
    { word: '주스', emoji: '🧃', sound: '주스' },
    { word: '커피', emoji: '☕', sound: '커피' },
    { word: '차', emoji: '🍵', sound: '차' },
    { word: '맥주', emoji: '🍺', sound: '맥주' },
    { word: '와인', emoji: '🍷', sound: '와인' },
    { word: '칵테일', emoji: '🍸', sound: '칵테일' },

    // Vehicles (탈것)
    { word: '차', emoji: '🚗', sound: '차' },
    { word: '버스', emoji: '🚌', sound: '버스' },
    { word: '기차', emoji: '🚂', sound: '기차' },
    { word: '비행기', emoji: '✈️', sound: '비행기' },
    { word: '자전거', emoji: '🚲', sound: '자전거' },
    { word: '배', emoji: '🚢', sound: '배' },
    { word: '소방차', emoji: '🚒', sound: '소방차' },
    { word: '경찰차', emoji: '🚓', sound: '경찰차' },
    { word: '택시', emoji: '🚕', sound: '택시' },
    { word: '트럭', emoji: '🚚', sound: '트럭' },
    { word: '오토바이', emoji: '🏍️', sound: '오토바이' },
    { word: '킥보드', emoji: '🛴', sound: '킥보드' },
    { word: '휠체어', emoji: '🦽', sound: '휠체어' },
    { word: '유모차', emoji: '🛒', sound: '유모차' }, // Shopping cart as stroller proxy or similar
    { word: '로켓', emoji: '🚀', sound: '로켓' },
    { word: '우주선', emoji: '🛸', sound: '우주선' },
    { word: '헬리콥터', emoji: '🚁', sound: '헬리콥터' },
    { word: '카누', emoji: '🛶', sound: '카누' },
    { word: '보트', emoji: '🚤', sound: '보트' },
    { word: '잠수함', emoji: '⚓', sound: '잠수함' }, // Anchor as proxy
    { word: '지하철', emoji: '🚇', sound: '지하철' },
    { word: '기차역', emoji: '🚉', sound: '기차역' },
    { word: '신호등', emoji: '🚦', sound: '신호등' },
    { word: '주유소', emoji: '⛽', sound: '주유소' },
    { word: '지도', emoji: '🗺️', sound: '지도' },
    { word: '나침반', emoji: '🧭', sound: '나침반' },

    // Nature (자연)
    { word: '나무', emoji: '🌳', sound: '나무' },
    { word: '꽃', emoji: '🌸', sound: '꽃' },
    { word: '해', emoji: '☀️', sound: '해' },
    { word: '달', emoji: '🌙', sound: '달' },
    { word: '별', emoji: '⭐', sound: '별' },
    { word: '비', emoji: '☔', sound: '비' },
    { word: '구름', emoji: '☁️', sound: '구름' },
    { word: '눈', emoji: '❄️', sound: '눈' },
    { word: '바람', emoji: '💨', sound: '바람' },
    { word: '번개', emoji: '⚡', sound: '번개' },
    { word: '무지개', emoji: '🌈', sound: '무지개' },
    { word: '불', emoji: '🔥', sound: '불' },
    { word: '물방울', emoji: '💧', sound: '물방울' },
    { word: '파도', emoji: '🌊', sound: '파도' },
    { word: '화산', emoji: '🌋', sound: '화산' },
    { word: '산', emoji: '⛰️', sound: '산' },
    { word: '바다', emoji: '🏖️', sound: '바다' },
    { word: '사막', emoji: '🏜️', sound: '사막' },
    { word: '섬', emoji: '🏝️', sound: '섬' },
    { word: '공원', emoji: '🏞️', sound: '공원' },
    { word: '지구', emoji: '🌍', sound: '지구' },
    { word: '선인장', emoji: '🌵', sound: '선인장' },
    { word: '야자수', emoji: '🌴', sound: '야자수' },
    { word: '소나무', emoji: '🌲', sound: '소나무' },
    { word: '나뭇잎', emoji: '🍃', sound: '나뭇잎' },
    { word: '단풍', emoji: '🍁', sound: '단풍' },
    { word: '장미', emoji: '🌹', sound: '장미' },
    { word: '해바라기', emoji: '🌻', sound: '해바라기' },
    { word: '튤립', emoji: '🌷', sound: '튤립' },
    { word: '풀', emoji: '🌿', sound: '풀' },
    { word: '네잎클로버', emoji: '🍀', sound: '네잎클로버' },

    // Body (신체)
    { word: '눈', emoji: '👁️', sound: '눈' },
    { word: '코', emoji: '👃', sound: '코' },
    { word: '입', emoji: '👄', sound: '입' },
    { word: '귀', emoji: '👂', sound: '귀' },
    { word: '손', emoji: '✋', sound: '손' },
    { word: '발', emoji: '🦶', sound: '발' },
    { word: '다리', emoji: '🦵', sound: '다리' },
    { word: '팔', emoji: '💪', sound: '팔' },
    { word: '머리', emoji: '💆', sound: '머리' }, // Head massage as proxy
    { word: '이빨', emoji: '🦷', sound: '이빨' },
    { word: '혀', emoji: '👅', sound: '혀' },
    { word: '뼈', emoji: '🦴', sound: '뼈' },
    { word: '뇌', emoji: '🧠', sound: '뇌' },
    { word: '심장', emoji: '❤️', sound: '심장' },
    { word: '손가락', emoji: '👆', sound: '손가락' },
    { word: '발자국', emoji: '👣', sound: '발자국' },

    // Objects (사물)
    { word: '가방', emoji: '🎒', sound: '가방' },
    { word: '모자', emoji: '🧢', sound: '모자' },
    { word: '신발', emoji: '👟', sound: '신발' },
    { word: '양말', emoji: '🧦', sound: '양말' },
    { word: '공', emoji: '⚽', sound: '공' },
    { word: '책', emoji: '📖', sound: '책' },
    { word: '시계', emoji: '⏰', sound: '시계' },
    { word: '우산', emoji: '☂️', sound: '우산' },
    { word: '안경', emoji: '👓', sound: '안경' },
    { word: '전화기', emoji: '☎️', sound: '전화기' },
    { word: '핸드폰', emoji: '📱', sound: '핸드폰' },
    { word: '컴퓨터', emoji: '💻', sound: '컴퓨터' },
    { word: '카메라', emoji: '📷', sound: '카메라' },
    { word: '텔레비전', emoji: '📺', sound: '텔레비전' },
    { word: '라디오', emoji: '📻', sound: '라디오' },
    { word: '마이크', emoji: '🎤', sound: '마이크' },
    { word: '헤드폰', emoji: '🎧', sound: '헤드폰' },
    { word: '악기', emoji: '🎸', sound: '악기' },
    { word: '피아노', emoji: '🎹', sound: '피아노' },
    { word: '북', emoji: '🥁', sound: '북' },
    { word: '연필', emoji: '✏️', sound: '연필' },
    { word: '펜', emoji: '🖊️', sound: '펜' },
    { word: '가위', emoji: '✂️', sound: '가위' },
    { word: '자', emoji: '📏', sound: '자' },
    { word: '편지', emoji: '✉️', sound: '편지' },
    { word: '상자', emoji: '📦', sound: '상자' },
    { word: '선물', emoji: '🎁', sound: '선물' },
    { word: '풍선', emoji: '🎈', sound: '풍선' },
    { word: '인형', emoji: '🧸', sound: '인형' },
    { word: '열쇠', emoji: '🔑', sound: '열쇠' },
    { word: '자물쇠', emoji: '🔒', sound: '자물쇠' },
    { word: '망치', emoji: '🔨', sound: '망치' },
    { word: '도끼', emoji: '🪓', sound: '도끼' },
    { word: '나사', emoji: '🔩', sound: '나사' },
    { word: '사다리', emoji: '🪜', sound: '사다리' },
    { word: '의자', emoji: '🪑', sound: '의자' },
    { word: '침대', emoji: '🛏️', sound: '침대' },
    { word: '문', emoji: '🚪', sound: '문' },
    { word: '창문', emoji: '🪟', sound: '창문' },
    { word: '거울', emoji: '🪞', sound: '거울' },
    { word: '비누', emoji: '🧼', sound: '비누' },
    { word: '칫솔', emoji: '🪥', sound: '칫솔' },
    { word: '휴지', emoji: '🧻', sound: '휴지' },
    { word: '약', emoji: '💊', sound: '약' },
    { word: '주사기', emoji: '💉', sound: '주사기' },
    { word: '돈', emoji: '💰', sound: '돈' },
    { word: '카드', emoji: '💳', sound: '카드' },
    { word: '보석', emoji: '💎', sound: '보석' },
    { word: '반지', emoji: '💍', sound: '반지' },
    { word: '왕관', emoji: '👑', sound: '왕관' },
    { word: '옷', emoji: '👕', sound: '옷' },
    { word: '바지', emoji: '👖', sound: '바지' },
    { word: '치마', emoji: '👗', sound: '치마' },
    { word: '코트', emoji: '🧥', sound: '코트' },
    { word: '장갑', emoji: '🧤', sound: '장갑' },
    { word: '목도리', emoji: '🧣', sound: '목도리' },
    { word: '넥타이', emoji: '👔', sound: '넥타이' },
    { word: '수영복', emoji: '🩱', sound: '수영복' },

    // People & Jobs (사람)
    { word: '엄마', emoji: '👩', sound: '엄마' },
    { word: '아빠', emoji: '👨', sound: '아빠' },
    { word: '아기', emoji: '👶', sound: '아기' },
    { word: '할머니', emoji: '👵', sound: '할머니' },
    { word: '할아버지', emoji: '👴', sound: '할아버지' },
    { word: '여자', emoji: '👩', sound: '여자' },
    { word: '남자', emoji: '👨', sound: '남자' },
    { word: '경찰', emoji: '👮', sound: '경찰' },
    { word: '소방관', emoji: '🧑‍🚒', sound: '소방관' },
    { word: '의사', emoji: '🧑‍⚕️', sound: '의사' },
    { word: '요리사', emoji: '🧑‍🍳', sound: '요리사' },
    { word: '선생님', emoji: '🧑‍🏫', sound: '선생님' },
    { word: '가수', emoji: '🧑‍🎤', sound: '가수' },
    { word: '화가', emoji: '🧑‍🎨', sound: '화가' },
    { word: '우주인', emoji: '🧑‍🚀', sound: '우주인' },
    { word: '탐정', emoji: '🕵️', sound: '탐정' },
    { word: '공주', emoji: '👸', sound: '공주' },
    { word: '왕자', emoji: '🤴', sound: '왕자' },
    { word: '천사', emoji: '👼', sound: '천사' },
    { word: '산타', emoji: '🎅', sound: '산타' },
    { word: '유령', emoji: '👻', sound: '유령' },
    { word: '외계인', emoji: '👽', sound: '외계인' },
    { word: '로봇', emoji: '🤖', sound: '로봇' },
    { word: '해골', emoji: '💀', sound: '해골' },

    // Places (장소)
    { word: '집', emoji: '🏠', sound: '집' },
    { word: '학교', emoji: '🏫', sound: '학교' },
    { word: '병원', emoji: '🏥', sound: '병원' },
    { word: '은행', emoji: '🏦', sound: '은행' },
    { word: '우체국', emoji: '🏤', sound: '우체국' },
    { word: '호텔', emoji: '🏨', sound: '호텔' },
    { word: '교회', emoji: '⛪', sound: '교회' },
    { word: '성', emoji: '🏰', sound: '성' },
    { word: '텐트', emoji: '⛺', sound: '텐트' },
    { word: '공장', emoji: '🏭', sound: '공장' },
    { word: '경기장', emoji: '🏟️', sound: '경기장' },
    { word: '놀이공원', emoji: '🎡', sound: '놀이공원' },
    { word: '분수', emoji: '⛲', sound: '분수' },
    { word: '다리', emoji: '🌉', sound: '다리' },

    // Sports & Activities (운동)
    { word: '축구', emoji: '⚽', sound: '축구' },
    { word: '농구', emoji: '🏀', sound: '농구' },
    { word: '야구', emoji: '⚾', sound: '야구' },
    { word: '배구', emoji: '🏐', sound: '배구' },
    { word: '테니스', emoji: '🎾', sound: '테니스' },
    { word: '탁구', emoji: '🏓', sound: '탁구' },
    { word: '볼링', emoji: '🎳', sound: '볼링' },
    { word: '골프', emoji: '⛳', sound: '골프' },
    { word: '권투', emoji: '🥊', sound: '권투' },
    { word: '수영', emoji: '🏊', sound: '수영' },
    { word: '달리기', emoji: '🏃', sound: '달리기' },
    { word: '춤', emoji: '💃', sound: '춤' },
    { word: '노래', emoji: '🎤', sound: '노래' },
    { word: '게임', emoji: '🎮', sound: '게임' },
    { word: '그림', emoji: '🎨', sound: '그림' },
    { word: '낚시', emoji: '🎣', sound: '낚시' },

    // Emotions & Shapes (기타)
    { word: '사랑', emoji: '❤️', sound: '사랑' },
    { word: '똥', emoji: '💩', sound: '똥' },
    { word: '폭탄', emoji: '💣', sound: '폭탄' },
    { word: '풍선', emoji: '🎈', sound: '풍선' },
    { word: '폭죽', emoji: '🎉', sound: '폭죽' },
    { word: '트로피', emoji: '🏆', sound: '트로피' },
    { word: '메달', emoji: '🥇', sound: '메달' },
    { word: '동그라미', emoji: '⭕', sound: '동그라미' },
    { word: '세모', emoji: '🔺', sound: '세모' },
    { word: '네모', emoji: '🟥', sound: '네모' },
    { word: '하트', emoji: '❤️', sound: '하트' },
    { word: '체크', emoji: '✅', sound: '체크' }
];

// App State
const state = {
    screen: 'home',
    selectedConsonant: null,
    selectedVowel: null
};

// DOM Elements
const mainContainer = document.getElementById('main-container');
const navBtns = document.querySelectorAll('.nav-btn');

// Navigation Logic
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        switchScreen(target);

        // Update Active State
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

function switchScreen(screenName) {
    state.screen = screenName;
    mainContainer.innerHTML = ''; // Clear

    switch (screenName) {
        case 'home':
            renderHome();
            break;
        case 'consonants':
            renderGrid(CONSONANTS, '자음');
            break;
        case 'vowels':
            renderGrid(VOWELS, '모음');
            break;
        case 'combine':
            renderCombine();
            break;
        case 'typing':
            renderTyping();
            break;
        case 'quiz':
            renderQuiz();
            break;
    }
}

// Render Functions
function renderHome() {
    const div = document.createElement('div');
    div.className = 'home-screen screen';
    div.innerHTML = `
        <div class="welcome-msg">
            안녕! 세희야!<br>
            오늘은 어떤 공부를 해볼까?
        </div>
        <button class="big-btn btn-jaeum" onclick="document.querySelector('[data-target=consonants]').click()">
            ㄱㄴㄷ 자음 배우기
        </button>
        <button class="big-btn btn-moeum" onclick="document.querySelector('[data-target=vowels]').click()">
            ㅏㅑㅓ 모음 배우기
        </button>
        <button class="big-btn btn-play" onclick="document.querySelector('[data-target=combine]').click()">
            ✨ 글자 만들기 놀이
        </button>
        <button class="big-btn btn-typing" onclick="document.querySelector('[data-target=typing]').click()">
            ⌨️ 단어 입력하기
        </button>
        <button class="big-btn btn-quiz" onclick="document.querySelector('[data-target=quiz]').click()">
            ❓ 단어 퀴즈
        </button>
    `;
    mainContainer.appendChild(div);
}

function renderGrid(items, type) {
    const wrapper = document.createElement('div');
    wrapper.className = 'screen';

    const title = document.createElement('h2');
    title.textContent = `${type} 목록`;
    title.style.margin = '0 0 15px 10px';
    wrapper.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'grid-container';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="images/${item.file}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        card.onclick = () => playSound(item.name);
        grid.appendChild(card);
    });

    wrapper.appendChild(grid);
    mainContainer.appendChild(wrapper);
}

function renderCombine() {
    state.selectedConsonant = null;
    state.selectedVowel = null;

    const wrapper = document.createElement('div');
    wrapper.className = 'combine-area screen';

    // Result Area
    const resultDisplay = document.createElement('div');
    resultDisplay.className = 'result-display';
    resultDisplay.textContent = '?';
    resultDisplay.onclick = () => {
        if (resultDisplay.textContent !== '?') {
            playSound(resultDisplay.textContent);
        }
    };
    wrapper.appendChild(resultDisplay);

    // Slots
    const slots = document.createElement('div');
    slots.className = 'selection-area';
    slots.innerHTML = `
        <div class="slot" id="slot-c">자음</div>
        <div class="slot" id="slot-v">모음</div>
    `;
    wrapper.appendChild(slots);

    // Reset Button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '다시 하기 🔄';
    resetBtn.className = 'reset-btn';
    resetBtn.style.padding = '8px 16px';
    resetBtn.style.borderRadius = '15px';
    resetBtn.style.border = 'none';
    resetBtn.style.background = '#eee';
    resetBtn.style.marginBottom = '10px';
    resetBtn.onclick = () => renderCombine(); // Re-render to reset
    wrapper.appendChild(resetBtn);

    // Selection Grids
    const cTitle = document.createElement('div');
    cTitle.className = 'step-title';
    cTitle.textContent = '1. 자음을 골라보세요!';
    wrapper.appendChild(cTitle);

    const cGrid = document.createElement('div');
    cGrid.className = 'grid-container';
    cGrid.style.height = '150px';
    cGrid.style.overflowY = 'auto';
    cGrid.style.border = '1px solid #eee';
    cGrid.style.padding = '10px';
    cGrid.style.borderRadius = '10px';

    CONSONANTS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="images/${item.file}">`;
        card.onclick = () => selectConsonant(item, card);
        cGrid.appendChild(card);
    });
    wrapper.appendChild(cGrid);

    const vTitle = document.createElement('div');
    vTitle.className = 'step-title';
    vTitle.textContent = '2. 모음을 골라보세요!';
    wrapper.appendChild(vTitle);

    const vGrid = document.createElement('div');
    vGrid.className = 'grid-container';
    vGrid.style.height = '150px';
    vGrid.style.overflowY = 'auto';
    vGrid.style.border = '1px solid #eee';
    vGrid.style.padding = '10px';
    vGrid.style.borderRadius = '10px';

    VOWELS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="images/${item.file}">`;
        card.onclick = () => selectVowel(item, card);
        vGrid.appendChild(card);
    });
    wrapper.appendChild(vGrid);

    mainContainer.appendChild(wrapper);
}

function selectConsonant(item, cardEl) {
    state.selectedConsonant = item;

    // UI Update
    document.querySelectorAll('.combine-area .grid-container:nth-of-type(1) .card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');

    const slot = document.getElementById('slot-c');
    slot.textContent = item.char;
    slot.classList.add('filled');
    slot.style.borderColor = '#FF6B6B';

    checkCombine();
    playSound(item.name);
}

function selectVowel(item, cardEl) {
    state.selectedVowel = item;

    // UI Update
    document.querySelectorAll('.combine-area .grid-container:nth-of-type(2) .card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');

    const slot = document.getElementById('slot-v');
    slot.textContent = item.char;
    slot.classList.add('filled');
    slot.style.borderColor = '#4ECDC4';

    checkCombine();
    playSound(item.name);
}

function checkCombine() {
    if (state.selectedConsonant && state.selectedVowel) {
        const cCode = state.selectedConsonant.code;
        const vCode = state.selectedVowel.code;

        // Hangul Composition Formula
        // ((Initial * 21) + Medial) * 28 + Final(0) + 0xAC00
        const unicode = ((cCode * 21) + vCode) * 28 + 0xAC00;
        const char = String.fromCharCode(unicode);

        const display = document.querySelector('.result-display');

        // Animation reset
        display.style.animation = 'none';
        display.offsetHeight; /* trigger reflow */
        display.style.animation = 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        display.textContent = char;
        display.style.color = '#2C3E50';

        // Play sound of the combined character
        setTimeout(() => playSound(char), 300);
    }
}

function renderQuiz() {
    const wrapper = document.createElement('div');
    wrapper.className = 'quiz-screen screen';

    // Pick Random Word
    const answerData = QUIZ_WORDS[Math.floor(Math.random() * QUIZ_WORDS.length)];

    // Generate Distractors
    const options = [answerData];
    while (options.length < 4) {
        const r = QUIZ_WORDS[Math.floor(Math.random() * QUIZ_WORDS.length)];
        if (!options.includes(r)) {
            options.push(r);
        }
    }
    options.sort(() => Math.random() - 0.5);

    // Render UI
    wrapper.innerHTML = `
        <div class="quiz-question-emoji">${answerData.emoji}</div>
        <div style="margin-bottom: 20px; font-size: 1.2rem; color: #777;">이것은 무엇일까요?</div>
        <div class="quiz-options">
            ${options.map(opt => {
        return `<button class="quiz-btn-text" onclick="checkAnswer(this, '${opt.word}', '${answerData.word}')">
                    ${opt.word}
                </button>`;
    }).join('')}
        </div>
    `;

    mainContainer.appendChild(wrapper);

    // Play sound
    playSound("이것은 무엇일까요?");
}

function checkAnswer(btn, selected, correct) {
    if (selected === correct) {
        btn.classList.add('correct');
        playSound("딩동댕! 정답입니다!");

        // Show Reading Prompt Overlay
        setTimeout(() => {
            showReadingPrompt(correct);
        }, 1000);

    } else {
        btn.classList.add('wrong');
        playSound("땡! 다시 생각해보세요.");
        setTimeout(() => {
            btn.classList.remove('wrong');
        }, 500);
    }
}

function showReadingPrompt(word) {
    const overlay = document.createElement('div');
    overlay.className = 'reading-prompt';
    overlay.innerHTML = `
        <div class="reading-msg">따라 읽어보세요!</div>
        <div class="reading-word">${word}</div>
        <button class="next-btn">다음 문제 ➡️</button>
    `;

    document.body.appendChild(overlay);

    // Play word sound
    setTimeout(() => playSound(word), 500);

    // Next button logic
    overlay.querySelector('.next-btn').onclick = () => {
        overlay.remove();
        renderQuiz();
    };
}

function renderTyping() {
    const wrapper = document.createElement('div');
    wrapper.className = 'typing-screen screen';

    // Pick Random Word
    const answerData = QUIZ_WORDS[Math.floor(Math.random() * QUIZ_WORDS.length)];

    wrapper.innerHTML = `
        <div class="typing-top">
            <div class="typing-emoji">${answerData.emoji}</div>
            <div class="typing-word">${answerData.word}</div>
        </div>
        <div class="typing-input-container">
            <input type="text" class="typing-input" id="typing-input-field" placeholder="여기에 쓰세요" autocomplete="off" spellcheck="false" inputmode="text">
            <button class="btn-submit" onclick="checkTypingAnswer('${answerData.word}')">제출</button>
            <div class="typing-feedback" id="typing-feedback-msg"></div>
        </div>
    `;

    mainContainer.appendChild(wrapper);

    // Play sound
    playSound(answerData.word + ". 보고 똑같이 적어보세요.");

    // Add enter key support
    const inputField = document.getElementById('typing-input-field');
    inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkTypingAnswer(answerData.word);
        }
    });

    // Auto-focus after a short delay (optional, might be annoying on mobile if keyboard pops up instantly, 
    // but on desktop it's good. Since it's web, user can just click it.)
    setTimeout(() => {
        inputField.focus();
    }, 500);
}

function checkTypingAnswer(correctWord) {
    const inputField = document.getElementById('typing-input-field');
    const feedbackMsg = document.getElementById('typing-feedback-msg');
    const userAnswer = inputField.value.trim();

    if (!userAnswer) return;

    if (userAnswer === correctWord) {
        playSound("딩동댕! 아주 잘했어요!");
        inputField.style.borderColor = '#4ECDC4';
        inputField.style.backgroundColor = '#E8F8F5';
        feedbackMsg.textContent = "정답이에요! 👏";
        feedbackMsg.style.color = '#4ECDC4';

        // Next problem after 2s
        setTimeout(() => {
            renderTyping();
        }, 2000);
    } else {
        playSound("땡! 다시 한 번 확인해보세요.");
        inputField.style.animation = 'shake 0.4s';
        inputField.style.borderColor = '#FF6B6B';
        feedbackMsg.textContent = "틀렸어요. 다시 써보세요! 😅";
        feedbackMsg.style.color = '#FF6B6B';

        setTimeout(() => {
            inputField.style.animation = 'none';
        }, 400);

        // Clear input after a short delay so they can try again
        setTimeout(() => {
            inputField.value = '';
            inputField.focus();
            feedbackMsg.textContent = '';
        }, 1500);
    }
}

function playSound(text) {
    if ('speechSynthesis' in window) {
        // Cancel previous speech to avoid queue buildup
        window.speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = 'ko-KR';
        msg.rate = 0.9; // Slightly slower for kids
        msg.pitch = 1.1; // Slightly higher pitch
        window.speechSynthesis.speak(msg);
    }
}

// Init
switchScreen('home');
