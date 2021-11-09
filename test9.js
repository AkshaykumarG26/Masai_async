function rotateMatrix(N,mat)
	{
		for (let x = 0; x < N / 2; x++)
		{	
		for (let y = x; y < N - x - 1; y++)
			{
				let temp = mat[x][y];
				mat[x][y] = mat[y][N - 1 - x];
				mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];
				mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];
				mat[N - 1 - y][x] = temp;
			}
		}
	}
	function displayMatrix(N,mat)
	{
		for (let i = 0; i < N; i++)
		{
			for (let j = 0; j < N; j++)
				console.log(" " + mat[i][j]);

			// document.write("<br>");
		}
		// document.write("<br>");
	}
	let N = 4;
	let mat=[[1, 2, 3, 4],[ 5, 6, 7, 8 ],[1, 2, 3, 4 ],[5, 6, 7, 8]];
	rotateMatrix(N, mat);
	displayMatrix(N, mat);
	
