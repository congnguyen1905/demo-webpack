import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative';

import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily'
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize'
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor'
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor'

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'

// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';

import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import IndentCommand from '@ckeditor/ckeditor5-list/src/indentcommand';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';

import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';

import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';

import './editor.css'

    const customColorPalette = [
        {
            color: 'hsl(4, 90%, 58%)',
            label: 'Red'
        },
        {
            color: 'hsl(340, 82%, 52%)',
            label: 'Pink'
        },
        {
            color: 'hsl(291, 64%, 42%)',
            label: 'Purple'
        },
        {
            color: 'hsl(262, 52%, 47%)',
            label: 'Deep Purple'
        },
        {
            color: 'hsl(231, 48%, 48%)',
            label: 'Indigo'
        },
        {
            color: 'hsl(207, 90%, 54%)',
            label: 'Blue'
        },
        {
            color: 'hsl(0, 0%, 0%)',
            label: 'Black'
        },
        {
            color: 'hsl(0, 0%, 30%)',
            label: 'Dim grey'
        },
        {
            color: 'hsl(0, 0%, 60%)',
            label: 'Grey'
        },
        {
            color: 'hsl(0, 0%, 90%)',
            label: 'Light grey'
        },
        {
            color: 'hsl(0, 0%, 100%)',
            label: 'White',
            hasBorder: true
        },
        {
            color: 'hsl(100%, 100%, 100%)',
            label: 'White'
        },
        {
            color: 'hsl(0, 75%, 60%)',
            label: 'Red'
        },
        {
            color: 'hsl(30, 75%, 60%)',
            label: 'Orange'
        },
        {
            color: 'hsl(60, 75%, 60%)',
            label: 'Yellow'
        },
        {
            color: 'hsl(90, 75%, 60%)',
            label: 'Light green'
        },
        {
            color: 'hsl(120, 75%, 60%)',
            label: 'Green'
        },
    ];
    const defaultConfig = {
        plugins: [ 
            TextPartLanguage,
            EssentialsPlugin,
            AutoformatPlugin,
            BoldPlugin,
            ItalicPlugin,
            Underline,
            Strikethrough,
            Subscript,
            Superscript,
            Code,
            CodeBlock,
            BlockQuotePlugin,
            HeadingPlugin,
            LinkPlugin,
            ListPlugin,
            TodoList,
            IndentCommand,
            ListStyle,
            ParagraphPlugin,
            Indent,
            IndentBlock,
            Image,
            ImageToolbar,
            ImageInsert,
            ImageResize,
            ImageStyle,
            ImageUpload,
            ImageCaption,
            ImageTextAlternative,
            Table,
            TableToolbar,
            TableProperties,
            TableCellProperties,
            FontFamily,
            FontSize,
            FontColor,
            FontBackgroundColor,
            Alignment,
            SpecialCharacters,
            SpecialCharactersCurrency,
            SpecialCharactersMathematical,
            SpecialCharactersArrows,
            SpecialCharactersEssentials,
            SpecialCharactersLatin,
            SpecialCharactersText
        ],
        toolbar: {
            items: [
                'heading', '|',
                'fontfamily', 'fontsize', 'fontColor', '|',
                'alignment', '|',
                'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', 'todoList',
                '-',
                'code', 'codeBlock', 'blockQuote','|',
                'insertTable', '|',
                'link', 'insertImage','|',
                'specialCharacters', '|',
                'undo', 'redo'
            ],
            shouldNotGroupWhenFull: true
        },
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells',
                'tableProperties', 'tableCellProperties'
            ],
    
            // Set the palettes for tables.
            tableProperties: {
                borderColors: customColorPalette,
                backgroundColors: customColorPalette
            },
    
            // Set the palettes for table cells.
            tableCellProperties: {
                borderColors: customColorPalette,
                backgroundColors: customColorPalette,
            },
            tablecellpropertiesediting :{
                width: '100px'
            }
        },
        image: {
            styles: [
                'alignLeft', 'alignCenter', 'alignRight'
            ],
    
            // Configure the available image resize options.
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                }
            ],
    
            // You need to configure the image toolbar, too, so it shows the new style
            // buttons as well as the resize buttons.
            toolbar: [
                'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
                '|',
                'resizeImage',
                '|',
                'imageTextAlternative'
            ]
    
        },
        fontFamily: {
            options: [
                'default',
                'Ubuntu, Arial, sans-serif',
                'Ubuntu Mono, Courier New, Courier, monospace',
                'Georgia, serif',
                'serif',
                'cursive',
            ]
        },
        fontSize: {
            options: [
                9,
                11,
                13,
                'default',
                17,
                19,
                21
            ],
            supportAllValues: true
        },
        fontColor: {
            colors: customColorPalette
        },
        fontBackgroundColor: {
            colors: customColorPalette
        },
        alignment: {
            options: [ 'left', 'center','right', 'justify' ]
        },
        indentBlock: {
            offset: 2,
            unit: 'em',
        },
    }

class App extends Component {
    
    render() {
        const config = defaultConfig
        config['placeholder'] = 'abcd'
        return (
            <div className="App">
                <CKEditor
                    config={config}
                    editor={ ClassicEditor }
                    // data="<p>Hello from CKEditor 5!</p>"
                    
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor.getData() );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor.getData() );
                    } }
                />
            </div>
        );
    }
}

export default App;