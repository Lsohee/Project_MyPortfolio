// kynd.info 2014
// memo paper js 에서 가져온 코드 분석
// Ball이라는 함수가 있는데 변수 rpv가 있음 //^ 대문자니까 아마도 생성자 함수

function Ball(r, p, v) {
  console.log(this)
	// ? this를 알아보기 위해 console을 찍어보려고 했는데 안찍힘 호출이 안됐나
	this.radius = r;
	this.point = p;

	// * vector : C++ 프로그래밍 언어에서 벡터(std::vector)는 유동적으로 크기 조절이 가능한 배열 자료 구조를 구현한 것입니다
	this.vector = v;


	this.maxVec = 15; // --> 가장 큰 vector가 15임


	// * Math.floor --> 주어진 숫자와 같거나 작은 정수중에 가장 큰 수를 반환함
	// --> 빈 배열들 이 함수 안에서만 쓸 건가봐
	// * segment : 선분 
	this.numSegment = Math.floor(r / 3 + 2); 
	//? 둥글기를 왜 3으로 나누고 2를 더하지? --> 3은 3.14즉 원주율인가..?그러면 3을 곱해야 되는데?
	// --> radius가 원 둘레인가봐 그걸 3으로 나누니까 지름이 나오는 거고 
	// ? 그럼 2는 왜 더해? 
	// --> 원지름을 최소 2보다 크게 만들고 싶은가봐


	//* offset : 두번째 주소를 만들기 위해 기준이 되는 주소에 더해진 값 
	this.boundOffset = [];
	// * buff -> 범프 (부딪치는 거)
	this.boundOffsetBuff = [];
	this.sidePoints = [];



	//? 이거는 본인을 가리키는 거 같은데 this.path === new Path()라는 함수 이게 맞아?
	// memo 이거는 this.path라는 객체가 생성자함수 Path의 인스턴스라는 걸 선언?함
	// --> 이 함수 안에서는 Path라는 생성자 함수를 못찾았는데 canvas에 Path라는 내장 메서드가 있나?
	this.path = new Path({
		// 요소 색 채우기
		fillColor: {
			hue: Math.random() * 360, //색을 랜덤 지정
			saturation: 1,
			brightness: 1
		},
		//  요소 blendMode 정하기 (오버레이나 그런거?)
		blendMode: 'lighter'
	});




	// 반복문이다 i가 numSegment의 값보다 작다
	for (var i = 0; i < this.numSegment; i ++) {
		
		this.boundOffset.push(this.radius); // boundOffset 배열에 radius값을 i만큼 추가하고
		this.boundOffsetBuff.push(this.radius); // boundOffsetBuff 배열에 radius값을 i만큼 추가함
		
		//this.path에 new Point()라는 함수를 추가
		this.path.add(new Point());


		// ? new Point 라는 함수는 없는데 인수를 대입한 함수만 존재
		// --> 내장함수인가?
		this.sidePoints.push(new Point({angle: 360 / this.numSegment * i,length: 1})); // sidePoints라는 배열에 new Point()라는 함수의 인스턴스를 i만큼 추가
	}
}
// Ball이라는 함수의 prototype(얕은 복사한 속성들의 주소값) --> 객체네
Ball.prototype = {

	
	// * iterate : 반복하다
	iterate: function() {
		this.checkBorders();
		if (this.vector.length > this.maxVec)
			this.vector.length = this.maxVec;
		this.point += this.vector; //? 이 코드는 if문 안에 있는걸까 아니면 그냥 함수 콜링시 직동하는 코드인가
		this.updateShape(); // --> 함수 updateShape를 여기서 호출했네
	},

	// ? if 문이 특이하네
	// * if문의 구문이 한줄이면 중괄호 생략가능 그래도 가독성을 위해 보통은 써주는 편 
	// --> checkBorders, 즉 벽면이나 다른 요소에 닿았는지를 확인하는 함수인듯
	checkBorders: function() {
		var size = view.size;
		if (this.point.x < -this.radius)
			this.point.x = size.width + this.radius;
		if (this.point.x > size.width + this.radius)
			this.point.x = -this.radius;
		if (this.point.y < -this.radius)
			this.point.y = size.height + this.radius;
		if (this.point.y > size.height + this.radius)
			this.point.y = -this.radius;
	},

	// --> 모양을 랜덤으로 바꿔주는 함수인듯
	updateShape: function() {
		var segments = this.path.segments; //--> path에 segment 라는 객체를 추가한건가? 
		for (var i = 0; i < this.numSegment; i ++)
			segments[i].point = this.getSidePoint(i);

		this.path.smooth(); //--> smooth라는 함수 호출
		
		for (var i = 0; i < this.numSegment; i ++) {
			if (this.boundOffset[i] < this.radius / 4)
				this.boundOffset[i] = this.radius / 4;
			var next = (i + 1) % this.numSegment;
			var prev = (i > 0) ? i - 1 : this.numSegment - 1;
			var offset = this.boundOffset[i];
			offset += (this.radius - offset) / 15;
			offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
			this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
		}
	},
	
	// --> 모양을 물처럼 물렁물렁하게 만드는 함수?
	react: function(b) {
		var dist = this.point.getDistance(b.point);
		if (dist < this.radius + b.radius && dist != 0) {
			var overlap = this.radius + b.radius - dist;
			var direc = (this.point - b.point).normalize(overlap * 0.015);
			this.vector += direc;
			b.vector -= direc;

			this.calcBounds(b);
			b.calcBounds(this);
			this.updateBounds();
			b.updateBounds();
		}
	},

	getBoundOffset: function(b) {
		var diff = this.point - b;
		var angle = (diff.angle + 180) % 360;
		return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
	},

	calcBounds: function(b) {
		for (var i = 0; i < this.numSegment; i ++) {
			var tp = this.getSidePoint(i);
			var bLen = b.getBoundOffset(tp);
			var td = tp.getDistance(b.point);
			if (td < bLen) {
				this.boundOffsetBuff[i] -= (bLen  - td) / 2;
			}
		}
	},

	getSidePoint: function(index) {
		return this.point + this.sidePoints[index] * this.boundOffset[index];
	},

	updateBounds: function() {
		for (var i = 0; i < this.numSegment; i ++)
			this.boundOffset[i] = this.boundOffsetBuff[i];
	}
};

//--------------------- main ---------------------

// ball이라는 배열 선언
var balls = [];
// 변수 numBalls는 18이라고 선언 //^ 아마도 공 개수가 18개 인가보지
var numBalls = 18;
// 반복문이다 //--> i의 최대값이 numBalls인거 보면 공을 만드는 함수인가봐
for (var i = 0; i < numBalls; i++) {
	var position = Point.random() * view.size;
	var vector = new Point({
		angle: 360 * Math.random(),
		length: Math.random() * 10
	});
	var radius = Math.random() * 60 + 60;
	balls.push(new Ball(radius, position, vector)); //*배열에 공만드는 인스턴스 추가 (배열 메서드)
}

//onFrame이라는 함수가 있음
function onFrame() {
	for (var i = 0; i < balls.length - 1; i++) {
		for (var j = i + 1; j < balls.length; j++) {
			balls[i].react(balls[j]);
		}
	}
	for (var i = 0, l = balls.length; i < l; i++) {
		balls[i].iterate();
	}
}