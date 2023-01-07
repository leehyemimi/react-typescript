import React from "react";
import "./App.css";

function App() {
	let 이름: string = "kim";
	let 나이: number = 20;
	let 출생지역: string = "서울";
	let 좋아하는노래: { 노래제목: string; 가수이름: string } = { 노래제목: "너의의미", 가수이름: "아이유" };
	let project: {
		member: string[];
		days: number;
		started: boolean;
	} = {
		member: ["kim", "park"],
		days: 30,
		started: true,
	};
	let 회원들: (string | number)[] = [1, "2", 3];
	let 오브젝트: { a: string | number } = { a: 123 };

	let user: string = "kim";
	let age: undefined | number = undefined;
	let married: boolean = false;
	let 철수: (string | number | undefined | boolean)[] = [user, age, married];

	let a: unknown = "kim";

	let 학교: {
		score: (number | boolean)[];
		teacher: string;
		friend: string | string[];
	} = {
		score: [100, 97, 84],
		teacher: "Phil",
		friend: "John",
	};
	학교.score[4] = false;
	학교.friend = ["Lee", 학교.teacher];

	function input(x?: string) {
		if (x) {
			console.log("안녕하세요 " + x);
		} else {
			console.log("왜입력안함");
		}
	}

	function numberIndex(x: number | string) {
		return x.toString().length;
	}

	return (
		<div className="App">
			{이름 + 나이 + 출생지역}
			<p>좋아하는노래 : {좋아하는노래.가수이름 + 좋아하는노래.노래제목}</p>
			<p>{project.member[0]}</p>
			<p>{회원들[0]}</p>
			<p>{오브젝트.a}</p>
			<p>{numberIndex(1)}</p>
			{/* <p>{input("홍길동")}</p> */}
		</div>
	);
}

export default App;
