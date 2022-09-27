#include <iostream>
using namespace std;
#define Max 10

struct stack
{
    int items[Max];
    int top;
    int size = 0;
};

typedef stack st;

void createEmptyStack(st *s)
{
    s->top = -1;
}

int isFull(st *s)
{
    if (s->top == Max - 1)
        return 1;
    else
    {
        return 0;
    }
}

int isempty(st *s)
{
    if (s->top == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

void push(st *s, int newitem)
{
    if (isFull(s))
    {
        cout << "Stack is FUll";
    }
    else
    {
        s->top++;
        s->items[s->top] = newitem;
    }
    s->size++;
}

void pop(st *s)
{
    if (isempty(s))
    {
        cout << "Stack is empty";
    }
    else
    {
        cout << "Item pooped=" << s->items[s->top] << endl;
        s->top--;
    }
    s->size--;
}
int main()
{

    st *s = (st *)malloc(sizeof(st));
    push(s, 1);
    push(s, 3);
    push(s, 10);
    push(s, 20);
    pop(s);
    pop(s);

    for (int i = 1; i < s->size + 1; i++)
    {
        cout << s->items[i] << endl;
    }

    return 0;
}
