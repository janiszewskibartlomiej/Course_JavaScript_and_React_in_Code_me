/**
 * Zapisz wycinek HTML jako obiekt javascript
 */

/*
<article class="box" role="listitem">
    <h2 class="box__title">Tytul</h2>
    <div class="box__content">jakis tekst</div>
</article >
*/

let objhtml = [
                {
                    nodeName: 'article',
                    class:'box',
                    role:'listitem',
                    childNodes: [
                        {
                            nodeName: 'h2'
                        },
                        {
                            class:'box_title'
                        }
                    ]
                },
                {
                    
                    tresc:'Tytul'
                },
                        {div:
                            {class:'box_content',
                            tresc:'jakis text'}
                        }
                ]

