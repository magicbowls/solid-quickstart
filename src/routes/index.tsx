import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Пространство Дремати</Title>
      <h1>Добро пожаловать</h1>
      <Counter />
      <p>
        Заходите на{" "}
        <a href="https://dremati.ru" target="_blank">
         Сайт Пространство Дремати
        </a>{" "}
       и преобщайтесь к нашим звуковым медитациям, онлайн стримам и звуковым ваннам.
      </p>
    </main>
  );
}
