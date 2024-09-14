import styles from './SimpleEditor.module.css'
import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const SimpleEditor = ({defValue, task, setTask }: any) => {
    const richTextFieldRef = useRef<HTMLIFrameElement>(null);
    const [cursorPosition, setCursorPosition] = useState<Range | null>(null);
    const [storageVal, setStorageVal] = useState('');

    useEffect(() => {
        const enableEditMode = () => {
            if (richTextFieldRef.current) {
                richTextFieldRef.current.contentDocument!.designMode = "on";
            }
        };

        enableEditMode();

        const handleContentChange = () => {
            if (richTextFieldRef.current) {
                const taskContent = richTextFieldRef.current.contentDocument!.body.innerHTML;
                setTask({ ...task, desc: taskContent });
            }
        };

        richTextFieldRef.current?.contentDocument?.body.addEventListener('input', handleContentChange);

        return () => {
            richTextFieldRef.current?.contentDocument?.body.removeEventListener('input', handleContentChange);
        };

    }, [task, setTask]);

    
    useEffect(() => {
        defValue && setStorageVal(defValue)
        console.log(storageVal)
    }, task)


    useEffect(() => {
        if (richTextFieldRef.current && cursorPosition) {
            const selection = richTextFieldRef.current.contentWindow!.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(cursorPosition);
            }
        }
    }, [cursorPosition]);

    return (
        <div>
            <iframe ref={richTextFieldRef} className={styles.editor}>
            {/* {task.desc && <ReactMarkdown>{task.desc}</ReactMarkdown>} */}
            {storageVal}
            </iframe>
        </div>
    );
};

export default SimpleEditor;
