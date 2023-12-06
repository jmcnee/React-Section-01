export default function TabButton2({ children, onSelect, isSelected }) {
    
    return (
        <li>
            <button className={isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
            {/*This is a button element. The onClick attribute is set to the onSelect prop, meaning that when the button is clicked, the onSelect function will be called. The content of the button is represented by {children}, which is a special prop in React that represents the content between the opening and closing tags of the component. Here is the implementation of the component:
            TabButton2 is actually a list item with a button that when clicked:
            assigns a value of 'onSelect' = the anonymous function "handleSelect"
            <TabButton2 onSelect={() => handleSelect('components')}>Components</TabButton2>
            */}
        </li>
    );
}