#include <stdio.h>
struct queue
{
    int arr[5];
    int front, rear;
} q;

int ctr = 0;
void rear(int v)
{
    if (ctr == 5)
    {
        printf("Queue is full\n");
        return;
    }
    q.arr[q.rear] = v;
    q.rear = (q.rear + 1) % 5;
    ctr++;
}
int front()
{
    if (ctr == 0)
    {
        printf("Queue is empty\n");
        return -1;
    }
    int v = q.arr[q.front];
    q.front = (q.front + 1) % 5;
    ctr--;
    return v;
}
int main()
{
    int choice, value;
    q.front = 0;
    q.rear = 0;

    while (1)
    {
        printf("1. Enqueue (Insert)\n");
        printf("2. Dequeue (Delete)\n");
        printf(" Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter value to insert: ");
            scanf("%d", &value);
            rear(value);
            break;

        case 2:
            value = front();
            if (value != -1)
                printf("Dequeued value: %d\n", value);
            break;

        case 3:
            printf("Exiting...\n");
            return 0;

        default:
            printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}