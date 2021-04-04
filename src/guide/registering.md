---
title: ユーザー登録
---

# ユーザー登録

Twinkle は、Google アカウントを利用して登録できます。

## 登録手順

1. [Twinkle にアクセス](https://app.twinkle.nandenjin.com/login)し、「ログイン」をクリックします。
2. 個人の Google アカウントでログインします。
3. 以下のような **「Twinkle が Google アカウントへのアクセスをリクエストしています」** の画面が表示される場合は、「許可」をクリックします。

![](./_assets/registering/oauth_request.png)

## ヒント

- 授業時間割を登録するカレンダーは、ここで選択した Google アカウントが持っているものから選択できます。
- Twinkle はバックグラウンドで Google カレンダーへアクセスし、自動で予定の書き込み・削除を行います。このため、ログイン時に「すべてのカレンダーのイベントの表示・編集」権限（`https://www.googleapis.com/auth/calendar.events`）をリクエストします。
  - あなたが操作したとき以外に、Twinkle がカレンダーへアクセスしたり書き換えたりすることはありません。
