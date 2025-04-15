/*

Author: Shayne McNeil
Date: April 15, 2025
Description: This program creates a singly-linked list that can be traversed using a generator function that yields each value in the linked list one at a time until it reaches the tail.

*/

// Create LinkedList class
class LinkedList {
    // LinkedList will store only the head node
    head;
    
    constructor(head = null) {
        this.head = head;
    }
    
    // Generator function to traverse the linked list
    * traverse() {
        // Variable to track the node we're currently on
        let currentNode = head;
        
        // While our current node is not empty
        while(currentNode !== null) {
            // Return the current node's value
            yield currentNode.value;
            // Update current node to the next node in the list
            currentNode = currentNode.next;
        }
    }
}

// Class for storing list nodes
class ListNode {
    value; // Value of the node
    next; // The next node it links to
    
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let myList = new LinkedList(); // Create our list
let head = new ListNode(0); // Create head node
// Create more nodes
let node1 = new ListNode(5);
let node2 = new ListNode(12);
let node3 = new ListNode(32);
let node4 = new ListNode(16);
let node5 = new ListNode(92);
// Link all the nodes together by updating .next properties
head.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Create generator to get values from traverse() function
let generator = myList.traverse();
// Set current value to the current node's value
let value = generator.next().value;

// While the current value is not undefined
while(value !== undefined) {
    console.log(value); // Print current node's value to console
    value = generator.next().value; // Update the current node's value to the next value yielded by the traverse() function
}
