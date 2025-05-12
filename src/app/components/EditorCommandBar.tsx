'use client';
import {useCurrentEditor} from "@tiptap/react";
import {Button, Wrap} from "@chakra-ui/react";

export default function EditorCommandBar() {
    const {editor} = useCurrentEditor()

    if (!editor) return null;

    return (
        <Wrap mb="20px" gap="5px">
            <Button variant={editor.isActive('bold') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
            >
                Bold
            </Button>
            <Button variant={editor.isActive('italic') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
            >
                Italic
            </Button>
            <Button variant={editor.isActive('strike') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
            >
                Strike
            </Button>
            <Button variant={editor.isActive('code') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
            >
                Code
            </Button>
            <Button variant="ghost" onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                Clear marks
            </Button>
            <Button variant="ghost" onClick={() => editor.chain().focus().clearNodes().run()}>
                Clear nodes
            </Button>
            <Button variant={editor.isActive('paragraph') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().setParagraph().run()}
            >
                Paragraph
            </Button>
            <Button variant={editor.isActive('heading', {level: 1}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
            >
                H1
            </Button>
            <Button variant={editor.isActive('heading', {level: 2}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
            >
                H2
            </Button>
            <Button variant={editor.isActive('heading', {level: 3}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
            >
                H3
            </Button>
            <Button variant={editor.isActive('heading', {level: 4}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
            >
                H4
            </Button>
            <Button variant={editor.isActive('heading', {level: 5}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 5}).run()}
            >
                H5
            </Button>
            <Button variant={editor.isActive('heading', {level: 6}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleHeading({level: 6}).run()}
            >
                H6
            </Button>
            <Button variant={editor.isActive('bulletList') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
                Bullet list
            </Button>
            <Button variant={editor.isActive('orderedList') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
                Ordered list
            </Button>
            <Button variant={editor.isActive('codeBlock') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            >
                Code block
            </Button>
            <Button variant={editor.isActive('blockquote') ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
            >
                Blockquote
            </Button>
            <Button variant="ghost" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                Horizontal rule
            </Button>
            <Button variant="ghost" onClick={() => editor.chain().focus().setHardBreak().run()}>
                Hard break
            </Button>
            <Button variant="ghost"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
            >
                Undo
            </Button>
            <Button variant="ghost"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
            >
                Redo
            </Button>
            <Button variant={editor.isActive('textStyle', {color: '#958DF1'}) ? "outline" : "ghost"}
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
            >
                Purple
            </Button>
        </Wrap>
    )
}
