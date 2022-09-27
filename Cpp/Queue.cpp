#include <iostream>
using namespace std;
#define size 5
class Queue
{
private:
    int items[size], font, rear;

public:
    Queue()
    {
        font = -1;
        rear = -1;
    }
    bool isFull()
    {
        if (font == 0 && rear == size - 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    bool isEmpty()
    {
        if (font == -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    void enQeue(int element)
    {
        if (isFull())
        {
            cout << "Queu is already full" << endl;
        }
        else
        {
            if (font == -1)
                font = 0;
            rear++;
            items[rear] = element;
            cout << "inserted element is" << element << endl;
        }
    }
    int deQueue()
    {
        int element;
        if (isEmpty())
        {
            cout << "Queue is empty" << endl;
            return -1;
        }
        else
        {
            element = items[font];
            if (font >= rear)
            {
                font = -1;
                rear = -1;
            }
            else
            {
                font++;
            }
            cout << "Deleted->" << element << endl;
        }
    }
};

int main()

{
    Queue q;
    q.enQeue(10);
    q.enQeue(20);
    q.enQeue(40);
    q.deQueue();

    return 0;
}
