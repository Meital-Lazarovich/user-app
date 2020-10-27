<template>
    <section class="login-form">
        <h2>היי, טוב לראות אותך</h2>
        <form>
            <div>
                <input type="email" name="email" placeholder="מייל" />
                <p>כתובת המייל איתה נרשמת לחשבונית ירוקה</p>
            </div>
            <div class="password">
                <input type="password" name="password" placeholder="סיסמה" />
                <a href="#">שכחת סיסמה?</a>
            </div>
            <div class="actions">
                <div class="btns flex">
                    <button type="submit" class="submit-btn">כניסה</button>
                    <button class="google-btn pointer">
                        <span>כניסה מהירה</span>
                        <img src="../assets/imgs/Google_G.svg" alt="" />
                    </button>
                </div>
                <p class="register-msg">
                    עוד לא הצטרפת?
                    <a href="#">ל-30 יום ניסיון חינם</a>
                </p>
            </div>
        </form>
    </section>
</template>