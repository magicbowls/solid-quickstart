import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Пространство Дремати</Title>

      <h1>Добро пожаловать в пространство Дремати</h1>
      <p>
Звуковые ванны и онлайн медитации с древними поющими чашами.
        Заходите на сайт {" "}
        <a href="https://dremati.ru" target="_blank">
     Пространство Дремати
        </a>{" "}
       и преобщайтесь к нашим звуковым медитациям, онлайн стримам и звуковым ваннам.
      </p>
    </main>
  );
}
