# 개인 홈페이지
일정 관리, 다이어리, 게시판, 챌린지 기능이 있는 개인 홈페이지 <br>
localStorage를 이용하여 데이터 저장
- 사용 기술: react.js
- 프로젝트 기간 : 2024.04. - 2024.05.

## 페이지 설명 및 기능
### 1. 메인 페이지
   
| 페이지                                                                                                                                                   | 기능 설명                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/c6d39d21-3176-4f83-a89e-d01e3026e1f5" alt="image" width="250" height="300"> | 1.  하단의 이모지가 있는 버튼을 눌러 원하는 기능의 페이지로 이동 |

### 2. 일정관리 페이지
   
| 페이지 상세 이름     | 페이지 사진                                                                                                                                              | 기능 설명                                                                                                                                                                                                                                                                                                                                            |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 일정관리 메인 페이지 | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/a8a20c1d-a197-4f3b-b6f1-a2ce57010b8f" alt="image" width="300" height="300"> | 1. 상단의 <, >버튼을 눌러 달을 변경시킬 수 있음 <br> 2. 상단의 집모양 버튼을 누르면 메인 페이지로 돌아감 <br> 3. 최신순, 오래된 순으로 정렬할 수 있음 <br> 4. Click Hear and Realize your perfect Day 버튼을 눌러 새로운 날의 일정 관리를 만들 수 있음 <br> 5. 사진 기준, 2024.6.6.을 눌러 해당 날의 일정을 관리하는 페이지(상세페이지)로 갈 수 있음 |
| 일정관리 새 페이지   | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/d84733ef-827c-42c1-bc40-f9e4828f1daa" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 일정관리 메인 페이지로 이동함 <br> 2. 새 일정을 만들 날짜 선택 가능(기본으로 현재 날짜가 선택되어 있음)<br>3. 일정 추가 가능 <br>4. 일정 검색 가능 <br>5. 일정 추가 시 List에 추가됨 <br>6. 일정 수행 완료시 체크 버튼을 누르면 To-do Progress rate가 변경됨 <br>7. 특정 일정 삭제 가능                                    |
| 상세페이지           | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/dc93a43a-832e-4165-be39-c1abb183a63f" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 일정관리 메인 페이지로 이동함<br>2. 일정 추가 가능 <br>3. 일정 검색 가능 <br>4. 일정 추가 시 List에 추가됨 <br>5. 일정 수행 완료시 체크 버튼을 누르면 To-do Progress rate가 변경됨 <br>6. 특정 일정 삭제 가능                                                                                                              |


### 3.  다이어리 페이지
   
| 페이지 상세 이름     | 페이지 사진                                                                                                                                              | 기능 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 다이어리 메인 페이지 | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/60dc80e3-aef5-474f-919c-54795ec78283" alt="image" width="300" height="300"> | 1. 상단의 <, >버튼을 눌러 달을 변경시킬 수 있음 <br> 2. 상단의 집모양 버튼을 누르면 메인 페이지로 돌아감 <br> 3. 최신순, 오래된 순으로 정렬할 수 있음 <br> 4. How are you Today? Click hear and Write about 버튼을 눌러 새로운 일기를 쓸 수 있음 <br> 5. 사진 기준, 2024.6.6.을 눌러 해당 날의 다이어리 페이지(상세페이지)로 갈 수 있음                                                                                                                                                                      |
| 다이어리 새 페이지   | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/b25c97ed-490f-4593-9d30-85c4539f1bd3" alt="image" width="300" height="300"> | 1. 새 일기를 쓸 날짜 선택 가능(기본으로 현재 날짜가 선택되어 있음)<br>2. 감정 선택 가능(기본으로 Good가 선택되어 있음) <br>3. 일기 작성 후 저장 버튼 누르면 일기가 저장됨 <br>4. 일기 작성 후 저장 버튼을 누르지 않고 상단의 < 버튼을 누르면 '수정 내용이 저장 안됩니다'라는 알림창이 뜸                                                                                                                                                                                                                     |
| 상세 페이지          | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/76497b72-9954-4c49-8743-758ff91e68c9" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 다이어리 메인 페이지로 이동함<br>2. 일기 수정 가능(감정, 내용 모두 가능) <br>3. 하단의 휴지통 버튼을 누르면 '삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?'라는 알림창이 뜨고 확인을 누르면 일기 삭제 가능 <br>4. 일기 수정 후 하단의 저장 버튼을 누르면 수정 완료 <br>5. 일기 수정 후 저장 버튼을 누르지 않은 상태에서 상단의 < 버튼을 누르면 '수정 내용이 저장 안됩니다'라는 확인창이 뜸 <br>6. 일기 수정 후 저장 버튼을 누를 때 '일기를 수정하시겠습니까?'라는 확인창이 뜸 |


### 4.  게시판 페이지
| 페이지 상세 이름   | 페이지 사진                                                                                                                                              | 기능 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 게시판 메인 페이지 | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/11d4097a-d0c4-40d6-84cb-ab2cbd7c3149" alt="image" width="300" height="300"> | 1. 상단의 <, >버튼을 눌러 달을 변경시킬 수 있음 <br> 2. 상단의 집모양 버튼을 누르면 메인 페이지로 돌아감 <br> 3. Click hear and Write a Story about Moment 버튼을 눌러 새로운 글을 작성할 수 있음 <br> 4. 특정 사진을 누르면 해당 글(상세페이지)로 갈 수 있음                                                                                                                                                                                                                                             |
| 게시판 새 페이지   | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/58ed4491-7021-4743-b837-bd2fa8cb351a" alt="image" width="300" height="300"> | 1. Click hear and Select your Best Moment 버튼을 눌러 이미지 선택 <br>2. 해당 이미지의 title과 설명 작성 가능(작성 하지 않아도 무관) <br>3. 사진을 선택하지 않은 후 저장 버튼을 누르면 '아직 이미지가 올라기지 않았습니다'라는 알림창이 뜸                                                                                                                                                                                                                                                                |
| 상세 페이지        | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/118bca77-98dd-426f-a9c5-8284034d9b1b" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 게시판 메인 페이지로 이동함<br>2. 글 수정 가능(사진, title, 사진 설명 모두 가능) <br>3. 하단의 휴지통 버튼을 누르면 '삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?'라는 알림창이 뜨고 확인을 누르면 해당 글 삭제 가능 <br>4. 수정 후 하단의 저장 버튼을 누르면 수정 완료 <br>5. 수정 후 저장 버튼을 누르지 않은 상태에서 상단의 < 버튼을 누르면 '수정 내용이 저장 안됩니다'라는 확인창이 뜸 <br>6. 글 수정 후 저장 버튼을 누를 때 '글을 수정하시겠습니까?'라는 확인창이 뜸 |

### 5.  챌린지 페이지
| 페이지 상세 이름   | 페이지 사진                                                                                                                                              | 기능 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 챌린지 메인 페이지 | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/a56ab9d3-31b8-45a9-8666-6e38da5b66f1" alt="image" width="300" height="300"> | 1. 상단의 <, >버튼을 눌러 달을 변경시킬 수 있음 <br> 2. 상단의 집모양 버튼을 누르면 메인 페이지로 돌아감 <br> 3. Total, In Progress, Done을 선택하여 그에 따라 정렬된 list를 볼 수 있음 <br>4. Click Hear and Realize your perfect Day 버튼을 눌러 새로운 챌린지를 만들 수 있음 <br> 4. 특정 챌린지를 누르면 해당 챌린지 페이지(상세페이지)로 갈 수 있음                                                                                                                                                                               |
| 챌린지 새 페이지   | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/691d50bb-c808-4397-a5f2-0fa110f6a848" alt="image" width="300" height="300"> | 1. 챌린지 기간을 선택할 수 있음(7일, 15일, 30일)<br>2. 해당 챌린지 주제를 적음 <br>3. 챌린지 시작 날짜를 선택함(기본으로 현재 날짜가 선택되어 있음) <br>4. 챌린지 기간을 선택하지 않았거나 챌린지 주제를 작성하지 않은 채 하단의 저장 버튼을 누르면 '입력을 모두 완료하세요 !'라는 알림창이 뜸                                                                                                                                                                                                                                         |
| 상세 페이지        | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/5fd22fc6-c638-49f9-b46c-0abe6e26a1f1" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 챌린지 메인 페이지로 이동함<br>2. day별 챌린지 내용 입력 후 저장해야함 <br>3. n일차 챌린지 내용을 저장하지 않고 checkbox를 누르면 'Day n 내용을 먼저 저장해주세요'라는 알림창이 뜸 <br>4. 챌린지 마지막날의 checkbox를 누르면 In Process에서 Done으로 상태가 변경됨 <br>5. 하단의 휴지통 버튼을 누르면 챌린지가 삭제됨 <br>6. 휴지통 버튼을 눌렀을 때 '삭제하면 복구되지 않습니다. 정말 삭제하겠습니까?'라는 알림창이 뜸 <br>7. 하단의 If U Wnat to Edit (Click) Hear! 버튼을 누르면 챌린지 수정 페이지로 감 |
| 챌린지 수정 페이지 | <img src="https://github.com/GyuriKim12/PersonalPage_Project/assets/80877176/8d4933cd-fc15-4f05-b731-9b984ae7f323" alt="image" width="300" height="300"> | 1. 상단의 < 버튼을 누르면 챌린지 메인 페이지로 이동함<br>2. 챌린지 기간, 챌린지 주제, 챌린지 날짜 모두 변경 가능함 <br>3. 하단의 저장 버튼을 누르면 '수정 내용을 저장하시겠습니까?'라는 알림창이 뜸                                                                                                                                                                                                                                                                                                                                    |