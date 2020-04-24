package com.solution;

import java.util.HashSet;

public class permutation {

	public int solution (int[] A, int N) {
		if (A == null || N == 0) return 0;
		HashSet<Integer> set = new HashSet<Integer>();
		for (int i : A) {
			if (i < 1 || i > N) {
				return 0;
			}
			set.add(i);
		}
		return set.size() == N ? 1 : 0;
	}
	public static void main(String[] args) {
		permutation p = new permutation();
		int[] A = {4,1,2,3};
		int[] B = {4,1,3};
		System.out.println(p.solution(A, A.length));
		System.out.println(p.solution(B, B.length));

	}

}
