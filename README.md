2.  After first method, the length is 1, capacity is 3 and the address is 0.  After adding the additional pushes the length becomes 6, the capacity 12 and the memory address is 3.  This is because after just one push the length was zero, so it did 0 + 1 times 3 to set the original capacity of 3.  Once that was reached at the length of 3, it resized to 3 + 1 * 4, making the new capacity 12. It then moved the new memory address to the next open spot after the old array, which is 3.

3.  The new length is 3, capacity is still 12 and address is still 3.  The pops removed the last 3 items from the array but didn't (nor should've) affected the capacity or the address.

4.  First item in array is 3.  When I push('tauhida') it returns NaN. This is because the memory in my memory class is constructed of a Float64Array which means it is made of floating integers, not strings. The _resize method is used to increase the capacity of the array as needed.