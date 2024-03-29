// 이전에 많이 쓰던 방식
        function argu(a, b, c) {   // 미리 지정이 필요함
            for (let i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
        }
        argu(1, 2, 3)

        // es6이후 선호되는 방식
        function restParams(...rest) {  // 매개변수에 ...이 붙으면 rest, 나머지는 spread operator
            console.log(rest);
        }
        restParams(1, 3, 5, 7, 9);

        function oneByOne(...rest) {
            for (let i = 0; i < rest.length; i++) {
                console.log(rest[i]);
            }
        }
        oneByOne(2, 4, 6, 8, 10);

        var 이름1 = { name: '김' };

        function 변경(obj) {
            obj.name = 'park';
        }

        변경(이름1);
        console.log(이름1);
