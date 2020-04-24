package com.solution;

import java.util.Arrays;

public class Results {

	public int[] solution(int[] A, int N, int K) {
		if (A == null || N == 0) return A;
		while (K > 0) {
			int temp = A[N - 1];
			for (int i = N - 2; i >= 0; i--) {
				A[i + 1] = A[i];
			}
			A[0] = temp;
			K--;
		}
		return A;
	}
	
	public static void main(String[] args) {
		Results rs = new Results();
		int[] A = {3,8,9,7,6};
		int K = 3;
		int[] ans = rs.solution(A, A.length, K);
		Arrays.stream(ans).forEach(i -> System.out.print(i+","));
	}

}
