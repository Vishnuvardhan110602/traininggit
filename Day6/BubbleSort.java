public class BubbleSort {
    public static void main(String[] args) {
        // Initialize the array of digits from the number 67253
        int[] numbers = {6, 7, 2, 5, 3};
        
        // Perform Bubble Sort
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = 0; j < numbers.length - 1 - i; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    // Swap numbers[j] and numbers[j + 1]
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;
                }
                
            }
        }
        
        // Print the sorted array
        System.out.print("Sorted digits: ");
        for (int number : numbers) {
            System.out.print(number);
        }
    }
}
