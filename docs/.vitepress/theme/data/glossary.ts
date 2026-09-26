// 本文件由 scripts/build-glossary.cjs 从《经济学-术语.md》生成，请勿手改。
// 用法：pnpm glossary

export interface GlossaryEntry {
  term: string
  course: string
  def: string
  source: string | null
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    "term": "IS 曲线",
    "course": "西方经济学",
    "def": "IS 曲线是将产品市场处于均衡的收入与利息率的组合描述出来的曲线。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "LM 曲线",
    "course": "西方经济学",
    "def": "LM 是描述货币市场处于均衡的利息率和国民收入的组合曲线。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "个人可支配收入",
    "course": "西方经济学",
    "def": "个人可支配收入（DPI）是指个人收入扣除个人所得税后，实际可用于消费和储蓄的那部分收入。公式：DPI = 个人收入 − 个人所得税。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "交换与生产同时符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换与生产同时符合帕累托最优的条件是指所有产品中任意两种产品的边际替代率等于这两种产品在生产中的边际转换率，即 \n    <span id=\"mjx-4c995158\">\n      <style>\n      #mjx-4c995158{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.339ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18.121ex\" height=\"1.934ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -705 8009.5 855\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(759,0)\"><path data-c=\"1D436\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z\"></path></g><g data-mml-node=\"msub\" transform=\"translate(1519,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(646,-150) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mi\"><path data-c=\"1D44B\" d=\"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(852,0)\"><path data-c=\"1D44C\" d=\"M66 637Q54 637 49 637T39 638T32 641T30 647T33 664T42 682Q44 683 56 683Q104 680 165 680Q288 680 306 683H316Q322 677 322 674T320 656Q316 643 310 637H298Q242 637 242 624Q242 619 292 477T343 333L346 336Q350 340 358 349T379 373T411 410T454 461Q546 568 561 587T577 618Q577 634 545 637Q528 637 528 647Q528 649 530 661Q533 676 535 679T549 683Q551 683 578 682T657 680Q684 680 713 681T746 682Q763 682 763 673Q763 669 760 657T755 643Q753 637 734 637Q662 632 617 587Q608 578 477 424L348 273L322 169Q295 62 295 57Q295 46 363 46Q379 46 384 45T390 35Q390 33 388 23Q384 6 382 4T366 1Q361 1 324 1T232 2Q170 2 138 2T102 1Q84 1 84 9Q84 14 87 24Q88 27 89 30T90 35T91 39T93 42T96 44T101 45T107 45T116 46T129 46Q168 47 180 50T198 63Q201 68 227 171L252 274L129 623Q128 624 127 625T125 627T122 629T118 631T113 633T105 634T96 635T83 636T66 637Z\"></path></g></g></g><g data-mml-node=\"mo\" transform=\"translate(3634.8,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(4690.5,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(5449.5,0)\"><path data-c=\"1D443\" d=\"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z\"></path></g><g data-mml-node=\"msub\" transform=\"translate(6200.5,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(617,-150) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mi\"><path data-c=\"1D44B\" d=\"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(852,0)\"><path data-c=\"1D44C\" d=\"M66 637Q54 637 49 637T39 638T32 641T30 647T33 664T42 682Q44 683 56 683Q104 680 165 680Q288 680 306 683H316Q322 677 322 674T320 656Q316 643 310 637H298Q242 637 242 624Q242 619 292 477T343 333L346 336Q350 340 358 349T379 373T411 410T454 461Q546 568 561 587T577 618Q577 634 545 637Q528 637 528 647Q528 649 530 661Q533 676 535 679T549 683Q551 683 578 682T657 680Q684 680 713 681T746 682Q763 682 763 673Q763 669 760 657T755 643Q753 637 734 637Q662 632 617 587Q608 578 477 424L348 273L322 169Q295 62 295 57Q295 46 363 46Q379 46 384 45T390 35Q390 33 388 23Q384 6 382 4T366 1Q361 1 324 1T232 2Q170 2 138 2T102 1Q84 1 84 9Q84 14 87 24Q88 27 89 30T90 35T91 39T93 42T96 44T101 45T107 45T116 46T129 46Q168 47 180 50T198 63Q201 68 227 171L252 274L129 623Q128 624 127 625T125 627T122 629T118 631T113 633T105 634T96 635T83 636T66 637Z\"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi><mi>C</mi><msub><mi>S</mi><mrow data-mjx-texclass=\"ORD\"><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mi>R</mi><mi>P</mi><msub><mi>T</mi><mrow data-mjx-texclass=\"ORD\"><mi>X</mi><mi>Y</mi></mrow></msub></math></mjx-assistive-mml></mjx-container>\n    </span>\n   。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "交换符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "交换符合帕累托最优条件是指在交换方面，任何一对商品之间的边际替代率对任何使用这两种商品的个人来说都相等，即 \n    <span id=\"mjx-5d1fe74\">\n      <style>\n      #mjx-5d1fe74{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.651ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16.239ex\" height=\"2.618ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -869.3 7177.8 1157.2\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(759,0)\"><path data-c=\"1D436\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z\"></path></g><g data-mml-node=\"msubsup\" transform=\"translate(1519,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(729.6,363) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mi\"><path data-c=\"1D434\" d=\"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z\"></path></g></g><g data-mml-node=\"TeXAtom\" transform=\"translate(646,-287.9) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mn\"><path data-c=\"31\" d=\"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z\"></path><path data-c=\"32\" d=\"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z\" transform=\"translate(500,0)\"></path></g></g></g><g data-mml-node=\"mo\" transform=\"translate(3199.9,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(4255.7,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(5014.7,0)\"><path data-c=\"1D436\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z\"></path></g><g data-mml-node=\"msubsup\" transform=\"translate(5774.7,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(729.6,363) scale(0.707)\"><path data-c=\"1D435\" d=\"M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(646,-287.9) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mn\"><path data-c=\"31\" d=\"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z\"></path><path data-c=\"32\" d=\"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z\" transform=\"translate(500,0)\"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mrow data-mjx-texclass=\"ORD\"><mn>12</mn></mrow><mrow data-mjx-texclass=\"ORD\"><mi>A</mi></mrow></msubsup><mo>=</mo><mi>R</mi><mi>C</mi><msubsup><mi>S</mi><mrow data-mjx-texclass=\"ORD\"><mn>12</mn></mrow><mi>B</mi></msubsup></math></mjx-assistive-mml></mjx-container>\n    </span>\n   ，此时该社会达到了产品分配的帕累托最优状态，从而实现了交换的效率。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "产品转换率",
    "course": "西方经济学",
    "def": "边际转换率是指增加另一种商品产出的数量必须减少某种商品产出数量的比例。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "价格歧视",
    "course": "西方经济学",
    "def": "价格歧视是指垄断厂商在同一时期内，以不同的价格销售同一种商品。",
    "source": "/western/市场理论"
  },
  {
    "term": "价格调整方程",
    "course": "西方经济学",
    "def": "价格调整方程指用来表示通胀率与产生通胀压力之间关系的方程。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "供给",
    "course": "西方经济学",
    "def": "供给是指在其他条件不变的情况下，在一定时期内生产者在各种可能的价格下愿意而且能够提供的该商品的数量。",
    "source": "/western/需求与供给"
  },
  {
    "term": "供给的价格弹性",
    "course": "西方经济学",
    "def": "供给的价格弹性是指，在一定时期内，一种商品的供给量的变动对于该商品的价格的变动的反应程度。",
    "source": "/western/需求与供给"
  },
  {
    "term": "供给规律",
    "course": "西方经济学",
    "def": "供给规律也称为供给定理、供给法则或供给原则，是指生产者的供给量与商品价格之间呈同方向变化的规律。",
    "source": "/western/需求与供给"
  },
  {
    "term": "免费乘车者问题",
    "course": "西方经济学",
    "def": "免费乘车者问题是指经济中由于存在不支付即可获得消费满足而产生的市场失灵问题。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "公共物品",
    "course": "西方经济学",
    "def": "通常把不具备排他性或（和）竞争性，一旦生产出来就不可能把某些人排除在外的商品称为（纯）公共物品。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "单一货币规则",
    "course": "西方经济学",
    "def": "单一货币规则是货币主义的政策主张，是货币主义经济学最重要的理论规则。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "厂商利润最大化原则",
    "course": "西方经济学",
    "def": "厂商利润最大化原则是厂商做生产决策时所遵循的一般原则，它要求每增加一单位产品（或要素）所增加的收益等于由此带来的成本增加量，即边际收益等于边际成本： \n    <span id=\"mjx-2033e9b8\">\n      <style>\n      #mjx-2033e9b8{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.186ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"11.209ex\" height=\"1.781ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -705 4954.6 787\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D440\" d=\"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(1051,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(2087.8,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(3143.6,0)\"><path data-c=\"1D440\" d=\"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(4194.6,0)\"><path data-c=\"1D436\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi><mi>R</mi><mo>=</mo><mi>M</mi><mi>C</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   。",
    "source": "/western/市场理论"
  },
  {
    "term": "古诺模型",
    "course": "西方经济学",
    "def": "古诺模型是一个只有两个寡头厂商的简单模型，即双头模型。",
    "source": "/western/市场理论"
  },
  {
    "term": "名义的和实际的国民收入",
    "course": "西方经济学",
    "def": "（1）名义的国民收入是按物品和劳务当年的价格计算所得的国民收入，它没有考虑通货膨胀因素。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "向后弯曲的劳动供给曲线",
    "course": "西方经济学",
    "def": "根据劳动者的最优化行为，对应于一个特定的工资率，劳动者在效用最大化点上确定最优劳动供给量，从而得到劳动的供给曲线。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "哈罗德-多马模型",
    "course": "西方经济学",
    "def": "哈罗德-多马模型是 20 世纪 40 年代由哈罗德和多马相继提出的分析经济增长问题的模型。",
    "source": "/western/经济增长"
  },
  {
    "term": "商品的边际替代率",
    "course": "西方经济学",
    "def": "商品的边际替代率指在效用水平保持不变的前提条件下，消费者增加一单位第一种商品的消费可以代替的另外一种商品的消费数量。",
    "source": "/western/效用论"
  },
  {
    "term": "国内生产总值",
    "course": "西方经济学",
    "def": "国内生产总值（GDP）是指经济社会（一国或一个地区）在一定时期内运用生产要素所生产的全部最终产品和劳务的市场价值总和。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "国民生产总值",
    "course": "西方经济学",
    "def": "国民生产总值（GNP）是指某国国民在一个既定的时期内所拥有的全部生产要素所生产的最终产品的市场价值总和，即本国常住居民所生产的最终产品市场价值的总和。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "均衡价格",
    "course": "西方经济学",
    "def": "均衡价格是指商品的市场需求量与市场供给量相等时的价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "垄断竞争市场",
    "course": "西方经济学",
    "def": "垄断竞争市场是指一种由许多厂商生产和销售有差别的同种产品的市场，市场中既有垄断又有竞争，既不是完全竞争又不是完全垄断。",
    "source": "/western/市场理论"
  },
  {
    "term": "外在性",
    "course": "西方经济学",
    "def": "外在性又称外部经济影响，是指一个经济行为主体的经济活动对另一个经济主体的福利所产生的效应，但这种效应并没有通过市场交易反映出来。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "外在经济和外在不经济",
    "course": "西方经济学",
    "def": "外在影响: 某一经济主体的经济行为对社会上其他人的福利造成影响，但并不为此承担后果。",
    "source": "/western/市场理论"
  },
  {
    "term": "失业率",
    "course": "西方经济学",
    "def": "失业率是指一定时期内失业人数占劳动力总数（就业人数与失业人数之和）的比率。",
    "source": "/western/宏观经济活动与宏观经济学"
  },
  {
    "term": "完全竞争市场",
    "course": "西方经济学",
    "def": "完全竞争市场是指一种竞争不受任何阻碍和干扰的市场结构。",
    "source": "/western/市场理论"
  },
  {
    "term": "寡头垄断市场",
    "course": "西方经济学",
    "def": "寡头垄断市场指那种在某一产业只存在少数几个卖者的市场组织形式。",
    "source": "/western/市场理论"
  },
  {
    "term": "局部均衡和一般均衡",
    "course": "西方经济学",
    "def": "局部均衡是指在假设其他市场不变的情况下，某一特定产品或要素的市场均衡。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "市场出清",
    "course": "西方经济学",
    "def": "市场出清是指，无论劳动市场上的工资还是产品市场上的商品价格都具有充分的灵活性，可以根据供求情况迅速进行调整，以达到供求相等的均衡状态。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "市场失灵",
    "course": "西方经济学",
    "def": "市场失灵是指市场机制不能有效地配置资源。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "帕累托最优状态",
    "course": "西方经济学",
    "def": "帕累托最优状态又称作经济效率，是指没有人可以在不使得他人境况变坏的条件下使得自身境况得到改善，此时的状态被称为帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "平均成本",
    "course": "西方经济学",
    "def": "平均成本是指厂商平均每生产一单位产品所消耗的成本。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "平均要素成本",
    "course": "西方经济学",
    "def": "平均要素成本是厂商购买每单位生产要素平均支付的成本。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "引致需求",
    "course": "西方经济学",
    "def": "引致需求又称“派生需求”，指由于消费者对产品的需求而引起的企业对生产要素的需求。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "总供给曲线",
    "course": "西方经济学",
    "def": "总供给是指经济社会中可供使用的商品和劳务总量。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "总收益、平均收益和边际收益",
    "course": "西方经济学",
    "def": "（1）厂商的总收益（ \n    <span id=\"mjx-a0f84198\">\n      <style>\n      #mjx-a0f84198{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.048ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"3.31ex\" height=\"1.593ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -683 1463 704\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(704,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>T</mi><mi>R</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   ）是指厂商按照一定价格出售一定量产品所获得的全部收入，即： \n    <span id=\"mjx-1babdac\">\n      <style>\n      #mjx-1babdac{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.566ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"13.077ex\" height=\"2.262ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -750 5780 1000\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(704,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(1740.8,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(2796.6,0)\"><path data-c=\"1D45D\" d=\"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(3299.6,0)\"><path data-c=\"28\" d=\"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(3688.6,0)\"><path data-c=\"1D466\" d=\"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(4178.6,0)\"><path data-c=\"29\" d=\"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(4789.8,0)\"><path data-c=\"22C5\" d=\"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(5290,0)\"><path data-c=\"1D466\" d=\"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>T</mi><mi>R</mi><mo>=</mo><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>y</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   。式中的 \n    <span id=\"mjx-55939be\">\n      <style>\n      #mjx-55939be{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.048ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"3.31ex\" height=\"1.593ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -683 1463 704\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(704,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>T</mi><mi>R</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   为总收益，\n    <span id=\"mjx-4460a29\">\n      <style>\n      #mjx-4460a29{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.566ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.007ex\" height=\"2.262ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -750 1771 1000\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D45D\" d=\"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(503,0)\"><path data-c=\"28\" d=\"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(892,0)\"><path data-c=\"1D466\" d=\"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(1382,0)\"><path data-c=\"29\" d=\"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>p</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo></math></mjx-assistive-mml></mjx-container>\n    </span>\n   为既定的市场价格，\n    <span id=\"mjx-3ff20648\">\n      <style>\n      #mjx-3ff20648{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.464ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1.109ex\" height=\"1.464ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -442 490 647\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D466\" d=\"M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>y</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   为销售总量。",
    "source": "/western/市场理论"
  },
  {
    "term": "总需求曲线",
    "course": "西方经济学",
    "def": "总需求是指经济社会对产品和劳务的需求总量。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "成本推动的通货膨胀",
    "course": "西方经济学",
    "def": "成本推动通货膨胀又称成本通货膨胀或供给通货膨胀，指由于供给成本的提高而引起的一般价格水平持续和显著的上涨。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "投资函数",
    "course": "西方经济学",
    "def": "以资本的边际效率不变为条件，投资取决于利息率，并且是利率的减函数，投资与利息率呈反方向变动关系，用公式表示为： I=I(r)",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "支持价格",
    "course": "西方经济学",
    "def": "支持价格又称为最低限价，是指政府为了扶植某一行业的生产而规定的该行业产品的最低价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "收入指数化",
    "course": "西方经济学",
    "def": "收入指数化是指政府对付成本推动的通货膨胀时采取的一项措施。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "收入效应",
    "course": "西方经济学",
    "def": "收入效应是因商品价格变动引起消费者实际收入水平变动，进而引起消费者改变消费数量而对商品需求量产生的影响。",
    "source": "/western/效用论"
  },
  {
    "term": "效用",
    "course": "西方经济学",
    "def": "效用是指商品或劳务满足人的欲望的能力，即指消费者在消费商品或劳务时所感受到的满足程度。",
    "source": "/western/效用论"
  },
  {
    "term": "新古典增长模型",
    "course": "西方经济学",
    "def": "新古典经济增长模型是指由美国经济学家索洛等提出的国民经济增长模型。",
    "source": "/western/经济增长"
  },
  {
    "term": "新古典宏观经济学",
    "course": "西方经济学",
    "def": "新古典宏观经济学，又称作“新古典主义”的一个经济学流派，这个学派的经济学遵循古典经济学的传统，相信市场力量的有效性；认为如果让市场机制自发地发挥作用，就可以解决失业、衰退等一系列宏观经济问题。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "无差异曲线",
    "course": "西方经济学",
    "def": "无差异曲线是序数效用论的一种分析方法，是用来表示消费者偏好相同的两种商品的所有的数量组合。",
    "source": "/western/效用论"
  },
  {
    "term": "替代效应",
    "course": "西方经济学",
    "def": "由商品的价格变动所引起的商品相对价格的变动，进而由商品的相对价格变动所引起的商品需求量的变动，称为替代效应。",
    "source": "/western/效用论"
  },
  {
    "term": "有保证的增长率",
    "course": "西方经济学",
    "def": "有保证的增长率 \n    <span id=\"mjx-f92f501\">\n      <style>\n      #mjx-f92f501{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.357ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"3.112ex\" height=\"1.952ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -705 1375.3 862.8\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"msub\"><g data-mml-node=\"mi\"><path data-c=\"1D43A\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(819,-150) scale(0.707)\"><path data-c=\"1D464\" d=\"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z\"></path></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>G</mi><mi>w</mi></msub></math></mjx-assistive-mml></mjx-container>\n    </span>\n   ，其公式为 \n    <span id=\"mjx-5fddf96\">\n      <style>\n      #mjx-5fddf96{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -1.033ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"8.826ex\" height=\"3.181ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -949.6 3901 1406.1\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"msub\"><g data-mml-node=\"mi\"><path data-c=\"1D43A\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(819,-150) scale(0.707)\"><path data-c=\"1D464\" d=\"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z\"></path></g></g><g data-mml-node=\"mo\" transform=\"translate(1653.1,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mfrac\" transform=\"translate(2708.8,0)\"><g data-mml-node=\"msub\" transform=\"translate(220,451.1) scale(0.707)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(646,-150) scale(0.707)\"><path data-c=\"1D451\" d=\"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z\"></path></g></g><g data-mml-node=\"msub\" transform=\"translate(282.5,-345) scale(0.707)\"><g data-mml-node=\"mi\"><path data-c=\"1D463\" d=\"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(518,-150) scale(0.707)\"><path data-c=\"1D45F\" d=\"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g></g><rect width=\"952.1\" height=\"60\" x=\"120\" y=\"220\"></rect></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>G</mi><mi>w</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>d</mi></msub><msub><mi>v</mi><mi>r</mi></msub></mfrac></math></mjx-assistive-mml></mjx-container>\n    </span>\n  ，式中，\n    <span id=\"mjx-bcfb9018\">\n      <style>\n      #mjx-bcfb9018{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.355ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2.407ex\" height=\"1.95ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -705 1063.7 862.1\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"msub\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(646,-150) scale(0.707)\"><path data-c=\"1D451\" d=\"M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z\"></path></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>S</mi><mi>d</mi></msub></math></mjx-assistive-mml></mjx-container>\n    </span>\n   是合意的储蓄率（假设既定），\n    <span id=\"mjx-510faea\">\n      <style>\n      #mjx-510faea{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.357ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2.007ex\" height=\"1.359ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -443 886.9 600.8\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"msub\"><g data-mml-node=\"mi\"><path data-c=\"1D463\" d=\"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(518,-150) scale(0.707)\"><path data-c=\"1D45F\" d=\"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z\"></path></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>v</mi><mi>r</mi></msub></math></mjx-assistive-mml></mjx-container>\n    </span>\n   是企业家意愿中所需的资本—产量比率。",
    "source": "/western/经济增长"
  },
  {
    "term": "比较静态分析",
    "course": "西方经济学",
    "def": "比较静态分析是比较分析不同静态均衡状态的方法。",
    "source": "/western/需求与供给"
  },
  {
    "term": "流动偏好",
    "course": "西方经济学",
    "def": "流动偏好也称流动性偏好，是指人们持有货币的偏好。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "流动偏好陷阱",
    "course": "西方经济学",
    "def": "流动性陷阱又称凯恩斯陷阱，是指当利率水平极低时，人们对货币的投机性需求趋于无限大，货币当局即使增加货币供给，也难以继续压低利率并刺激投资的一种经济状态。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "消费物价指数",
    "course": "西方经济学",
    "def": "消费物价指数是消费者物价指数的简称，它反映消费品（包括劳务）价格水平变动状况，一般用加权平均法来编制。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "消费者均衡",
    "course": "西方经济学",
    "def": "消费者均衡是指在其他条件不变的情况下，消费者实现效用最大化并将保持不变的一种状态。",
    "source": "/western/效用论"
  },
  {
    "term": "理性预期假设",
    "course": "西方经济学",
    "def": "理性预期假说是指经济当事人对价格、利率、利润或收入等经济变量未来的变动可以作出符合理性的估计。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "瓦尔拉斯定律",
    "course": "西方经济学",
    "def": "瓦尔拉斯定律也称为瓦尔拉斯法则，是由经济学家瓦尔拉斯在其完全竞争市场的一般均衡理论体系中提出一个恒等关系式。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "生产符合帕累托最优的条件",
    "course": "西方经济学",
    "def": "生产符合帕累托最优的条件指对于有多个个人、多种商品、多种生产要素的经济，达到均衡时要求在生产方面，任何一对生产要素之间的边际技术替代率在用这两种投入要素生产的所有商品的生产中都相等，即 \n    <span id=\"mjx-3b59d2a8\">\n      <style>\n      #mjx-3b59d2a8{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.679ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"17.81ex\" height=\"2.565ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -833.9 7871.9 1133.9\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(759,0)\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"msubsup\" transform=\"translate(1463,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(729.6,363) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mn\"><path data-c=\"31\" d=\"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z\"></path></g></g><g data-mml-node=\"TeXAtom\" transform=\"translate(646,-300) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mi\"><path data-c=\"1D43F\" d=\"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(681,0)\"><path data-c=\"1D43E\" d=\"M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z\"></path></g></g></g><g data-mml-node=\"mo\" transform=\"translate(3546.9,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(4602.7,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(5361.7,0)\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"msubsup\" transform=\"translate(6065.7,0)\"><g data-mml-node=\"mi\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g><g data-mml-node=\"mn\" transform=\"translate(729.6,363) scale(0.707)\"><path data-c=\"32\" d=\"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z\"></path></g><g data-mml-node=\"TeXAtom\" transform=\"translate(646,-300) scale(0.707)\" data-mjx-texclass=\"ORD\"><g data-mml-node=\"mi\"><path data-c=\"1D43F\" d=\"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(681,0)\"><path data-c=\"1D43E\" d=\"M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z\"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow data-mjx-texclass=\"ORD\"><mi>L</mi><mi>K</mi></mrow><mrow data-mjx-texclass=\"ORD\"><mn>1</mn></mrow></msubsup><mo>=</mo><mi>R</mi><mi>T</mi><msubsup><mi>S</mi><mrow data-mjx-texclass=\"ORD\"><mi>L</mi><mi>K</mi></mrow><mn>2</mn></msubsup></math></mjx-assistive-mml></mjx-container>\n    </span>\n   ，此时该社会达到了帕累托最优状态。",
    "source": "/western/一般均衡论和福利经济学"
  },
  {
    "term": "生产要素最优组合",
    "course": "西方经济学",
    "def": "生产要素最优组合是指在生产技术和要素价格不变的条件下，生产者在成本既定时实现产量最大或在产量既定时实现成本最小目标时所使用的各种生产要素的数量组合。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "科斯定理",
    "course": "西方经济学",
    "def": "科斯定理是一种产权理论。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "等产量曲线",
    "course": "西方经济学",
    "def": "等产量曲线是在技术水平不变的条件下，生产同一产量的两种生产要素投入量的各种不同组合的轨迹。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "等成本方程",
    "course": "西方经济学",
    "def": "厂商的等成本方程是指在要素价格一定的条件下，表示厂商花费相同成本可以使用的所有不同的要素组合的代数式。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "纳什均衡",
    "course": "西方经济学",
    "def": "纳什均衡指的是如果其他参与者不改变策略，任何一个参与者都不会改变自己的策略。",
    "source": "/western/市场理论"
  },
  {
    "term": "自然率假说",
    "course": "西方经济学",
    "def": "自然率假说是指在没有货币因素干扰的情况下，劳动市场在竞争条件下达到均衡时所决定的就业率。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "菲利普斯曲线",
    "course": "西方经济学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "规模收益递增、不变和递减",
    "course": "西方经济学",
    "def": "作为规模经济与规模不经济的一种特殊的情况，如果产量的增加是借助于生产要素的同比例扩大实现的， 那么相应的可定义规模收益的概念： - ①如果产量增加的比例大于生产要素增加的比例，则称生产是规模收益递增的； - ②若产量增加",
    "source": "/western/生产和成本论"
  },
  {
    "term": "规模经济与规模不经济",
    "course": "西方经济学",
    "def": "规模经济和规模不经济用来说明厂商产量变动从而规模变动与成本之间的关系。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "货币主义",
    "course": "西方经济学",
    "def": "货币主义又称货币学派，它以制止通货膨胀和反对国家干预为主旨，以现代货币数量论为理论基础，坚信货币供给量的变动是物价水平和经济活动变动的最根本原因；强调货币及货币政策的重要性，主张实行单一规则的货币政策。",
    "source": "/western/宏观经济学的意见分歧"
  },
  {
    "term": "货币工资刚性",
    "course": "西方经济学",
    "def": "货币工资刚性是指货币工资不随劳动需求和供给的变化而迅速做出相应的调整的现象。",
    "source": "/western/总需求和总供给分析"
  },
  {
    "term": "资本的边际效率",
    "course": "西方经济学",
    "def": "资本的边际效率是一种贴现率，这一贴现率恰好使一项资本品在使用期内各预期收益的贴现值之和等于 该项资本品的供给价格和重置成本。",
    "source": "/western/产品市场和货币市场的一般均衡"
  },
  {
    "term": "边际产品价值",
    "course": "西方经济学",
    "def": "边际产品价值指增加一单位生产要素所增加的产量的价值，它等于边际产量与产品价格的乘积，即： \n    <span id=\"mjx-76e48d98\">\n      <style>\n      #mjx-76e48d98{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.186ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16.244ex\" height=\"1.731ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -683 7180 765\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D449\" d=\"M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(769,0)\"><path data-c=\"1D440\" d=\"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(1820,0)\"><path data-c=\"1D443\" d=\"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(2848.8,0)\"><path data-c=\"3D\" d=\"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(3904.6,0)\"><path data-c=\"1D443\" d=\"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z\"></path></g><g data-mml-node=\"mo\" transform=\"translate(4877.8,0)\"><path data-c=\"22C5\" d=\"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(5378,0)\"><path data-c=\"1D440\" d=\"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(6429,0)\"><path data-c=\"1D443\" d=\"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>V</mi><mi>M</mi><mi>P</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>M</mi><mi>P</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "边际产量",
    "course": "西方经济学",
    "def": "边际产量是指在生产技术水平和其他投入要素不变的情况下，每增加一单位可变投入要素所得到的总产量的增加量。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际成本",
    "course": "西方经济学",
    "def": "边际成本是指产量变动某一数量所引起的成本变动的数量，也即厂商在短期内增加一单位产量时所增加的总成本。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际技术替代率",
    "course": "西方经济学",
    "def": "在维持产量水平不变的条件下，增加一单位某种生产要素投入量时所减少的另一种要素的投入数量，被称为边际技术替代率，其英文缩写为 \n    <span id=\"mjx-a6a413b\">\n      <style>\n      #mjx-a6a413b{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.05ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7.147ex\" height=\"1.645ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -705 3159 727\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D440\" d=\"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(1051,0)\"><path data-c=\"1D445\" d=\"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(1810,0)\"><path data-c=\"1D447\" d=\"M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(2514,0)\"><path data-c=\"1D446\" d=\"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>M</mi><mi>R</mi><mi>T</mi><mi>S</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际技术替代率递减规律",
    "course": "西方经济学",
    "def": "边际技术替代率递减规律是指，在维持产量不变的前提下，当一种生产要素的投入量不断增加时，每一单位的这种生产要素所能替代的另一种生产要素的数量是递减的。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际收益产品",
    "course": "西方经济学",
    "def": "边际收益产品是指在其他生产要素的投入量固定不变时追加一单位的某种生产要素投入所带来的收益。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "边际收益递减规律",
    "course": "西方经济学",
    "def": "在技术水平不变的条件下，在连续等量地把某一种可变生产要素增加到其他一种或几种数量不变的生产要素上去的过程中，当这种可变生产要素的投入量小于某一特定值时，增加该要素投入所带来的边际产量是递增的；当这种可变要素的投入量连续增",
    "source": "/western/生产和成本论"
  },
  {
    "term": "边际效用递减规律",
    "course": "西方经济学",
    "def": "边际效用递减规律是指特定时期内，在其他商品的消费保持不变的条件下，消费者不断地增加某种商品的消费量，随着该商品消费数量的增加，消费者每增加一单位该商品的消费所获得的效用增加量逐渐减少。",
    "source": "/western/效用论"
  },
  {
    "term": "边际要素成本",
    "course": "西方经济学",
    "def": "边际要素成本是指厂商增加一单位生产要素投入量所带来的成本增加量。",
    "source": "/western/生产要素市场"
  },
  {
    "term": "逆向选择",
    "course": "西方经济学",
    "def": "逆向选择指在次品市场上出现的高质量产品遭淘汰而低质量产品生存下来的现象。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "道德风险",
    "course": "西方经济学",
    "def": "道德风险是指交易双方在签订交易合约后，信息占优势的一方为了最大化自己的收益而损坏另一方，同时也不承担后果的一种行为，即是市场的一方不能查知另一方的行动一种情形，又被称作隐藏行动问题。",
    "source": "/western/市场失灵和微观经济政策"
  },
  {
    "term": "长期平均成本曲线",
    "course": "西方经济学",
    "def": "长期平均成本曲线（ \n    <span id=\"mjx-0b7dd278\">\n      <style>\n      #mjx-0b7dd278{\n        display:contents;\n        mjx-assistive-mml {\n          user-select: text !important;\n          clip: auto !important;\n          color: rgba(0,0,0,0);\n        }\n        \nmjx-container[jax=\"SVG\"] {\n  direction: ltr;\n}\n\nmjx-container[jax=\"SVG\"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax=\"SVG\"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-assistive-mml {\n  position: absolute !important;\n  top: 0px;\n  left: 0px;\n  clip: rect(1px, 1px, 1px, 1px);\n  padding: 1px 0px 0px 0px !important;\n  border: 0px !important;\n  display: block !important;\n  width: auto !important;\n  overflow: hidden !important;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmjx-assistive-mml[display=\"block\"] {\n  width: 100% !important;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax=\"SVG\"][display=\"true\"][width=\"full\"] {\n  display: flex;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"left\"] {\n  text-align: left;\n}\n\nmjx-container[jax=\"SVG\"][justify=\"right\"] {\n  text-align: right;\n}\n\ng[data-mml-node=\"merror\"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node=\"merror\"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node=\"mtable\"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node=\"mtable\"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node=\"mtable\"] > g > svg {\n  overflow: visible;\n}\n\n[jax=\"SVG\"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax=\"SVG\"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node=\"maction\"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax=\"SVG\"] path[data-c], mjx-container[jax=\"SVG\"] use[data-c] {\n  stroke-width: 3;\n}\n\ng[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n.MathJax g[data-mml-node=\"xypic\"] path {\n  stroke-width: inherit;\n}\n\n      }\n      </style>\n      <mjx-container class=\"MathJax\" jax=\"SVG\" style=\"position: relative;\"><svg style=\"vertical-align: -0.05ex;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.957ex\" height=\"1.67ex\" role=\"img\" focusable=\"false\" viewBox=\"0 -716 2191 738\" aria-hidden=\"true\"><g stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" transform=\"scale(1,-1)\"><g data-mml-node=\"math\"><g data-mml-node=\"mi\"><path data-c=\"1D43F\" d=\"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(681,0)\"><path data-c=\"1D434\" d=\"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z\"></path></g><g data-mml-node=\"mi\" transform=\"translate(1431,0)\"><path data-c=\"1D436\" d=\"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z\"></path></g></g></g></svg><mjx-assistive-mml unselectable=\"on\" display=\"inline\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>L</mi><mi>A</mi><mi>C</mi></math></mjx-assistive-mml></mjx-container>\n    </span>\n   ）是用于描述长期平均成本与产量关系的一条曲线。",
    "source": "/western/生产和成本论"
  },
  {
    "term": "限制价格",
    "course": "西方经济学",
    "def": "限制价格是指政府为了防止某些生活必需品的价格上涨而规定的这些产品的最高价格。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求",
    "course": "西方经济学",
    "def": "消费者对一种商品的需求，是指在一个特定时期内消费者在各种可能的价格下愿意而且能够购买的该商品的数量。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求拉动的通货膨胀",
    "course": "西方经济学",
    "def": "需求拉动通货膨胀是指由总需求增加所引起的一般价格水平的持续和显著的上涨。",
    "source": "/western/通货膨胀理论"
  },
  {
    "term": "需求的交叉弹性",
    "course": "西方经济学",
    "def": "需求的交叉弹性是指在某特定时间内，某种商品或劳务需求量变动的百分比与另一种相关商品或劳务的价格变动百分比之比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求的价格弹性",
    "course": "西方经济学",
    "def": "需求的价格弹性反映了相应于价格的变动，需求量变动的敏感程度，用弹性系数加以衡量，被定义为需求量变动的百分比除以价格变动的百分比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求的收入弹性",
    "course": "西方经济学",
    "def": "需求的收入弹性是指相应于消费者收入的变动，需求量变动的敏感程度，其弹性系数定义为需求量变动的百分比除以收入变动的百分比。",
    "source": "/western/需求与供给"
  },
  {
    "term": "需求规律",
    "course": "西方经济学",
    "def": "需求规律也称为需求定理、需求法则或需求原则，指消费者的需求量与商品价格之间呈反方向变化的规律。",
    "source": "/western/需求与供给"
  },
  {
    "term": "预算约束线",
    "course": "西方经济学",
    "def": "预算约束线又称为预算线、消费可能线和价格线，表示在消费者的收入和商品的价格给定的条件下，消费者的全部收入所能购买到的两种商品的各种组合。",
    "source": "/western/效用论"
  },
  {
    "term": "收入-消费曲线",
    "course": "西方经济学",
    "def": "在消费者的偏好和商品的价格不变的条件下，消费者的收入变动引起的消费者效用最大化的均衡点的轨迹。它反映收入变化引起的消费量变动的情况。",
    "source": "/western/效用论"
  },
  {
    "term": "基数效用论",
    "course": "西方经济学",
    "def": "基数效用论认为效用可以用基数（1, 2, 3…）来衡量和加总，消费者通过比较不同商品组合的效用来做出选择。",
    "source": "/western/效用论"
  },
  {
    "term": "政府购买乘数",
    "course": "西方经济学",
    "def": "政府购买乘数是指政府购买支出变动所引起的国民收入变动量与政府购买支出变动量的比率。",
    "source": "/western/简单国民收入决定理论"
  },
  {
    "term": "一价定律",
    "course": "国际经济学",
    "def": "一价定律是关于在自由贸易条件下国际商品价格定价规律的一种理论。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "倾销",
    "course": "国际经济学",
    "def": "倾销是指出口商以低于国内市场价格的价格，甚至以低于成本的价格在国际市场销售商品的行为。",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "偿债率",
    "course": "国际经济学",
    "def": "偿债率是指一国在某一时期，所举借外债的还本付息额与其各种出口收入总和之比。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "关税同盟",
    "course": "国际经济学",
    "def": "关税同盟是指两个或两个以上国家结盟划为一个关税区域，在区域内相互取消关税与非关税壁垒，实行自由贸易，同时对非加盟国实行统一的关税和贸易限制的关税区域。",
    "source": "/international/经济一体化与国际经济秩序分析"
  },
  {
    "term": "关税壁垒与非关税壁垒",
    "course": "国际经济学",
    "def": "关税壁垒是指为了保护本国市场、扶持本国某些产业发展，对进口商品征收关税，特别是高额关税，以限制外国商品进口的贸易措施。",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "升水与贴水",
    "course": "国际经济学",
    "def": "升水是贴水的对称，是指货币资金在两个不同时点，或两个不同地点，或两个不同币种之间进行调换或兑换时的比价提高。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "固定借贷",
    "course": "国际经济学",
    "def": "固定借贷是指国际借贷中形成了借贷关系，但尚未进入实际支付的那种债权、债务关系。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "固定汇率与浮动汇率",
    "course": "国际经济学",
    "def": "固定汇率是指政府用行政手段或法律手段选择一基本参照物，并确定、公布和维持本国货币与该单位参照物的固定比价的汇率制度。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "国际分工",
    "course": "国际经济学",
    "def": "国际分工即各国之间的劳动分工，生产的国际专业化。",
    "source": "/international/绪论"
  },
  {
    "term": "国际收支",
    "course": "国际经济学",
    "def": "国际收支的概念有狭义和广义之分。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "国际经济学",
    "course": "国际经济学",
    "def": "国际经济学是指以经济学的一般理论为基础来研究国际经济活动与国际经济关系的经济学分支学科。",
    "source": "/international/绪论"
  },
  {
    "term": "外汇",
    "course": "国际经济学",
    "def": "外汇是货币行政当局（中央银行、货币机构、外汇平准基金组织以及财政部）以银行存款、财政部库券、长短期政府证券等形式保有的在国际收支逆差时可以用作支付使用的国际支付手段或债权。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "官方储备",
    "course": "国际经济学",
    "def": "官方储备是指一个国家的中央银行或其他官方货币机构所掌握的外币储备资产及其对外债权。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "幼稚产业",
    "course": "国际经济学",
    "def": "如果某种产业由于技术不足、劳动生产率低下、产品成本高于世界市场，因而无法与国外产业竞争，但在关税、补贴等保护措施下继续生产一段时间，经过一段时间的生产能够在自由贸易条件下获利，达到其他国家水平而自立，形成比较优势并良性发",
    "source": "/international/国际贸易政策分析"
  },
  {
    "term": "开放经济",
    "course": "国际经济学",
    "def": "开放经济也称“开放型经济”，与“封闭经济”相对，是指一个国家或地区的经济活动与世界市场或外地市场有着密切联系（如存在国际贸易、国际金融往来）的经济。",
    "source": "/international/绪论"
  },
  {
    "term": "所有权特定优势",
    "course": "国际经济学",
    "def": "所有权特定优势是指企业具有的组织管理能力、金融融资方面的优势、技术方面的特点和优势、企业的规模与其垄断地位及其他能力等优势。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "提供曲线",
    "course": "国际经济学",
    "def": "提供曲线又称为供应条件曲线，也称相互需求曲线，是由马歇尔和艾奇沃斯提出的，它表明一个国家为了进口一定量的商品，必须向其他国家出口一定量的商品，因此提供曲线即对应某一进口量愿意提供的出口量的轨迹。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "比较利益",
    "course": "国际经济学",
    "def": "比较利益是指贸易双方根据各自的比较优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "汇率",
    "course": "国际经济学",
    "def": "汇率又称“汇价”、“外汇牌价”或“外汇行市”，指外汇买卖的价格。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "流动借贷",
    "course": "国际经济学",
    "def": "流动借贷是国际金融中汇率决定理论——国际借贷学说中的重要概念。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "现值债务率",
    "course": "国际经济学",
    "def": "现值债务率是指一个债务国当年未偿还债务的现值与当年国民生产总值的比率。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "直接标价法与间接标价法",
    "course": "国际经济学",
    "def": "直接标价法又称“应付标价法”，是指以一定单位的外国货币作为标准，折算为一定数量的本国货币，即是以本国货币来表示外国货币价格的方法。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "经济全球化",
    "course": "国际经济学",
    "def": "联合国贸发会议对经济全球化定义如下：“全球化是世界各国在经济上跨国界联系和相互依存日益加强的过程，运输、通讯和信息技术的迅速进步有力地促进了这一过程。",
    "source": "/international/经济全球化趋势"
  },
  {
    "term": "绝对利益",
    "course": "国际经济学",
    "def": "绝对利益是指贸易双方根据各自的绝对优势进行生产，然后交换产品而取得的贸易利益。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "贷方与借方项目",
    "course": "国际经济学",
    "def": "贷方项目是指在国际收支平衡表中表示一国资产减少或负债增加的项目，该项目意味着本国商品、劳务的输出或外国金融资产的流入。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "贸易乘数",
    "course": "国际经济学",
    "def": "贸易乘数指乘数理论在对外贸易研究中的作用，探讨对外贸易与国民收入和就业之间的关系。",
    "source": "/international/宏观经济的内外均衡"
  },
  {
    "term": "贸易创造与贸易转移",
    "course": "国际经济学",
    "def": "贸易创造是“贸易转移”的对称，是指两国或两个以上国家之间结成关税同盟之后，签约国之间的特惠贸易协定导致成员国之间的贸易代替了过去各自的国内生产和消费，即创造出了新的贸易的现象。",
    "source": "/international/经济一体化与国际经济秩序分析"
  },
  {
    "term": "贸易条件",
    "course": "国际经济学",
    "def": "贸易条件又称“交换比价”或“贸易比价”，是指一个国家在一定时期内出口商品价格与进口商品价格之间的比例关系。",
    "source": "/international/国际贸易纯理论"
  },
  {
    "term": "边际进口倾向",
    "course": "国际经济学",
    "def": "边际进口倾向是指进口量的变动对引起这种变动的收入变动的比率，即每增加一单位国民收入的变动量所能引起进口变动的比率。",
    "source": "/international/宏观经济的内外均衡"
  },
  {
    "term": "汇兑心理理论",
    "course": "国际经济学",
    "def": "汇兑心理说是国际借贷说与购买力平价说的结合。它的理论基础是主观效用论，认为人们需要外汇是因为要购买商品和服务以满足人们的欲望，效用是外汇的价值基础，真正的价值在于其边际效用，而这又是人们主观心理决定的。",
    "source": "/international/汇率决定的一般理论"
  },
  {
    "term": "国际收支失衡",
    "course": "国际经济学",
    "def": "国际收支失衡是指经常账户、资本和金融账户的余额出现问题，即对外经济出现了需要调整的情况。",
    "source": "/international/国际收支分析"
  },
  {
    "term": "两缺口模型",
    "course": "国际经济学",
    "def": "两缺口模型由钱纳里和斯特劳特提出，认为发展中国家在经济发展过程中面临储蓄缺口和外汇缺口的约束。",
    "source": "/international/要素的国际流动"
  },
  {
    "term": "“收支两条线”管理",
    "course": "财政学",
    "def": "“收支两条线”管理是指国家机关、事业单位、社会团体及其他组织，按照国家有关规定依法取得的政府非税收入全额缴入国库或者财政专户，支出通过财政部门编制预算进行统筹安排，资金通过国库或财政专户收缴和拨付的管理制度。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "价内税与价外税",
    "course": "财政学",
    "def": "以税收与价格的关系为标准，税收可分为价内税和价外税。",
    "source": "/finance/税收原理"
  },
  {
    "term": "免费搭车行为",
    "course": "财政学",
    "def": "免费搭车行为是指不承担任何成本而消费或使用公共物品的行为，有这种行为的人或具有让别人付钱而自己享受公共物品收益动机的人称为免费搭车者。",
    "source": "/finance/财政职能"
  },
  {
    "term": "公共定价法",
    "course": "财政学",
    "def": "公共定价法是指政府对公共企业生产的商品和服务的定价或政府对私人部门定价的管制。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "分类所得税",
    "course": "财政学",
    "def": "分类所得税是指对纳税人的各种应纳税所得分为若干类别，不同类别（或来源）的所得适用不同的税率，分别课征所得税。",
    "source": "/finance/税收制度"
  },
  {
    "term": "国债发行市场",
    "course": "财政学",
    "def": "国债发行市场是指国债发行场所，又称国债一级市场或初级市场，是国债交易的初始环节，即国债最初发行的市场。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国债流通市场",
    "course": "财政学",
    "def": "国债流通市场又称国债二级市场，是指国债交易的第二阶段，即已经上市发行的国债进行买卖、转让和流通的市场。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国债限度",
    "course": "财政学",
    "def": "国债限度是指国家债务规模的最高额度或国债的适度规模。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "国家预算",
    "course": "财政学",
    "def": "国家预算是指政府的基本财政收支计划。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "国家预算法",
    "course": "财政学",
    "def": "国家预算法是国家预算管理的法律规范，是组织和管理国家预算的法律依据。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "寻租行为",
    "course": "财政学",
    "def": "寻租行为是指通过游说政府活动获得某种垄断权或特许权，以赚取超常利润或租金的行为。",
    "source": "/finance/财政职能"
  },
  {
    "term": "就业创造标准",
    "course": "财政学",
    "def": "就业创造标准是指政府应当选择单位投资额能够动员最大数量劳动力的项目。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "建设－经营－转让投资方式",
    "course": "财政学",
    "def": "建设－经营－转让投资（BOT）方式是指政府将一些拟建的基础设施建设项目通过招商转让给某一财团或公司，由其组建一个经营公司进行建设经营，并在双方协定的一定时期内，由该项目公司通过经营该项目偿还债务，收回投资，协议期满，项目",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "成本—效益分析法",
    "course": "财政学",
    "def": "成本—效益分析法是指针对政府确定的建设目标，提出若干实现建设目标的方案，详列各种方案的全部预期成本和全部预期效益，通过分析比较，选择出最优的政府投资项目的一种分析方法。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "投票规则",
    "course": "财政学",
    "def": "投票规则是通过投票进行决策的一种公共选择程序规则。",
    "source": "/finance/财政职能"
  },
  {
    "term": "拉弗曲线",
    "course": "财政学",
    "def": "拉弗曲线是指反映税率与税收总额之间关系的曲线。",
    "source": "/finance/税收原理"
  },
  {
    "term": "政府失灵",
    "course": "财政学",
    "def": "政府失灵是指政府的活动或干预措施缺乏效率，或者说，政府作出了降低经济效率的决策或不能实施改善经济效率的政策。",
    "source": "/finance/财政职能"
  },
  {
    "term": "政府采购制度",
    "course": "财政学",
    "def": "政府采购制度是指中央政府、地方政府及法律规定的其他实体以法定的方式向社会采购物资、工程或服务，并对采购过程进行监督管理的一种控制制度。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "最低费用选择法",
    "course": "财政学",
    "def": "最低费用选择法一般不用货币单位来计量备选的财政支出项目的社会效益，只计算每项备选项目的有形成本，并以成本最低为择优的标准。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "社会保障",
    "course": "财政学",
    "def": "社会保障是指政府通过专款专用税筹措资金，向老年人、无工作能力的人、失去工作机会的人、病人等提供基本生活保障的计划。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "税制改革",
    "course": "财政学",
    "def": "税制改革是指通过税制设计和税制结构的边际改变来增进社会福利的过程。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税制类型",
    "course": "财政学",
    "def": "税制类型是指以一定标准对税收制度进行分类而形成的一种税制。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税制结构与税制模式",
    "course": "财政学",
    "def": "税制结构是指一国税收体系的整体布局和总体结构，是国家根据当时经济条件和发展要求，在特定税收制度下，由税类、税种、税制要素和征收管理层次所组成的，分别主次，相互协调、相互补充的整体系统。",
    "source": "/finance/税收制度"
  },
  {
    "term": "税收中性",
    "course": "财政学",
    "def": "税收中性是指政府课税不扭曲市场机制的运行，或者说不影响私人部门原有的资源配置状况。",
    "source": "/finance/税收原理"
  },
  {
    "term": "税负转嫁",
    "course": "财政学",
    "def": "税负转嫁是指在商品交换过程中，纳税人通过提高销售价格或压低购进价格的方法，将税负转移给购买者或供应者的一种经济现象。",
    "source": "/finance/税收原理"
  },
  {
    "term": "累进税率",
    "course": "财政学",
    "def": "累进税率是指按课税对象数额的大小，划分若干等级，每个等级由低到高规定相应的税率，课税对象数额越大税率越高，数额越小税率越低。",
    "source": "/finance/税收原理"
  },
  {
    "term": "综合所得税",
    "course": "财政学",
    "def": "综合所得税是指对纳税人个人的各种应税所得（如工薪收入、利息、股息、财产所得等）综合征收。",
    "source": "/finance/税收制度"
  },
  {
    "term": "财政平衡",
    "course": "财政学",
    "def": "财政平衡是指国家财政的收入与支出等量。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "财政投融资",
    "course": "财政学",
    "def": "财政投融资是指以国家的信用为基础，通过多种渠道筹措资金，有偿地投资于具有公共性的领域。",
    "source": "/finance/财政投资支出和社会保障支出"
  },
  {
    "term": "购买性支出",
    "course": "财政学",
    "def": "按照经济性质分类，财政支出可以分为购买性支出和转移性支出。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "赤字依存度和赤字比率",
    "course": "财政学",
    "def": "赤字依存度是指财政赤字占财政支出的比例，说明一国在当年的总支出中有多大比例是依赖赤字支出实现的。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "转移性支出",
    "course": "财政学",
    "def": "按照经济性质分类，财政支出可以分为: - 购买性支出 - 转移性支出 转移性支出指政府资金无偿的、单方面的转移。",
    "source": "/finance/财政支出规模与结构"
  },
  {
    "term": "预算外资金",
    "course": "财政学",
    "def": "预算外资金是指按国家财政制度规定不纳入国家预算的、允许地方财政部门和由预算拨款的行政事业单位自收自支的资金。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算管理体制",
    "course": "财政学",
    "def": "预算管理体制是指处理中央和地方以及地方各级政府之间的财政关系的各种制度的总称。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算调整",
    "course": "财政学",
    "def": "预算调整是预算执行的一项重要程序。",
    "source": "/finance/国家预算与预算管理体制"
  },
  {
    "term": "预算赤字",
    "course": "财政学",
    "def": "预算赤字是指在某一财政年度，政府计划安排的总支出超过经常性收入并存在于决算中的差额。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "非税收入",
    "course": "财政学",
    "def": "非税收入是指政府通过非税收形式取得的财政收入，包括行政事业性收费、政府性基金、国有资源有偿使用收入等。",
    "source": "/finance/财政职能"
  },
  {
    "term": "国债结构",
    "course": "财政学",
    "def": "国债结构是指不同类型国债之间的组合比例关系，包括期限结构、持有者结构、利率结构等。",
    "source": "/finance/国债理论与管理"
  },
  {
    "term": "财政赤字排挤效应",
    "course": "财政学",
    "def": "财政赤字排挤效应是指政府通过增加支出或减税实施扩张性财政政策时，导致利率上升，从而挤出了私人投资。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "逆弹性命题",
    "course": "财政学",
    "def": "逆弹性命题是指在最优商品税制下，对各种商品征税的税率应与该商品的需求价格弹性成反比，即弹性越小的商品税率应越高。",
    "source": "/finance/税收原理"
  },
  {
    "term": "赤字财政",
    "course": "财政学",
    "def": "赤字财政是指政府有意识、有计划地利用预算赤字，以熨平经济波动，是一种扩张性财政政策。",
    "source": "/finance/财政平衡与财政赤字"
  },
  {
    "term": "丁伯根法则",
    "course": "货币银行学",
    "def": "丁伯根法则是由荷兰经济学家扬·丁伯根提出的政策目标与政策工具配置原则。丁伯根是 1969 年首届经济学奖共同得主之一。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "互换",
    "course": "货币银行学",
    "def": "互换是指互换双方达成协议并在一定的期限内转换彼此货币种类、借贷利率基础及其他资产的一种交易。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "全能型商业银行",
    "course": "货币银行学",
    "def": "全能型商业银行是指商业银行可以经营一切金融业务，包括各种期限和种类的存贷款，各种证券买卖以及信托，支付清算等金融业务。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "内外均衡",
    "course": "货币银行学",
    "def": "内外均衡是指经济的对内与对外均衡。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "利率与收益率",
    "course": "货币银行学",
    "def": "利率是利息率的简称，是一定时期内利息额与贷出资本额的比率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "名义利率和实际利率",
    "course": "货币银行学",
    "def": "名义利率是指以名义货币表示的利率，是借贷契约和有价证券上载明的利息率，也就是金融市场表现出的利率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "国际货币体系",
    "course": "货币银行学",
    "def": "国际货币体系是指国际间的货币安排。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "基准利率",
    "course": "货币银行学",
    "def": "基准利率是指带动和影响其他利率的利率，也称为“中心利率”。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "基础货币",
    "course": "货币银行学",
    "def": "基础货币也称为“高能货币”、“强力货币”，是指中央银行所发行的现金货币和商业银行在中央银行的准备金存款的总和。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "存款保险制度",
    "course": "货币银行学",
    "def": "存款保险制度是一种对存款人利益提供保护、稳定金融体系的制度安排。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "居民消费物价指数",
    "course": "货币银行学",
    "def": "居民消费物价指数是综合反映一定时期内居民生活消费品和服务项目价格变动的趋势和程度的价格指数。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "布雷顿森林体系",
    "course": "货币银行学",
    "def": "布雷顿森林体系是指第二次世界大战后以固定汇率制为基本特征的国际货币体系。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "强制储蓄效应",
    "course": "货币银行学",
    "def": "政府如果通过向中央银行借债，从而引起货币增发这类办法筹措建设资金，就会强制增加全社会的投资需求，结果将是物价上涨。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "支出调整政策",
    "course": "货币银行学",
    "def": "支出调整政策是指通过影响国内收入和国内总支出，或者通过控制货币供给量、收缩或扩张国内投资和消费总需求来调控国内总供给与总需求以达到内部均衡目标的宏观经济政策。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "支出转换政策",
    "course": "货币银行学",
    "def": "支出转换政策是指能够影响贸易商品的国际竞争力通过改变支出构成而使本国收入相对于支出增加的政策。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "收入分配效应",
    "course": "货币银行学",
    "def": "由于社会各阶层收入来源极不相同，因此，在物价总水平上涨时，有些人的实际收入水平会下降，有些人的实际收入水平却反而会提高。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "收益的资本化",
    "course": "货币银行学",
    "def": "收益的资本化是指，由于利息已转化为收益的一般形态，于是任何有收益的事物，即使它并不是一笔贷放出去的货币，甚至不是真正有一笔实实在在的资本存在，也可以通过收益与利率的对比而倒过来算出它相当于多大的资本金额。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "最终贷款人",
    "course": "货币银行学",
    "def": "最终贷款人是指在危机时刻中央银行应尽的融通责任，它应满足对高能货币的需求，以防止由恐慌引起的货币存量的收缩。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "期权",
    "course": "货币银行学",
    "def": "期权合约赋予其持有者（即期权的购买者）一种权利，使其可以（但不必须）在未来约定的时期内以议定的价格向期权合约的出售者买入（看涨期权）或卖出（看跌期权）一定数量的资产。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "期货",
    "course": "货币银行学",
    "def": "期货合约是在远期合约的基础上发展起来的一种标准化的买卖合约。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "汇率制度",
    "course": "货币银行学",
    "def": "汇率制度是指一个国家、一个经济体或一个经济区域或国际社会对于确定、维持、调整与管理汇率的原则、依据、方法和机构等所作出的系统规定。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "泰勒规则",
    "course": "货币银行学",
    "def": "泰勒规则是根据产出和通货膨胀的相对变化而调整利率的操作方法。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "流动性偏好",
    "course": "货币银行学",
    "def": "凯恩斯在分析影响货币需求的因素时认为，货币需求主要由个人对收入支配的心理因素决定。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "滞涨",
    "course": "货币银行学",
    "def": "滞胀是指经济过程所呈现的并不是失业和通货膨胀之间的相互“替代”，而是经济停滞和通货膨胀相伴随，高的通货膨胀率与高的失业率相伴随。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "特里芬难题",
    "course": "货币银行学",
    "def": "特里芬难题是指在布雷顿森林体系下，美元承担的两个责任，即保证美元按官价兑换黄金、维持各国对美元的信心和提供足够的国际清偿力（即美元）之间的矛盾。",
    "source": "/monetary/国际货币体系"
  },
  {
    "term": "短期利率和长期利率",
    "course": "货币银行学",
    "def": "金融市场上的利率种类根据期限可分为短期利率和长期利率。",
    "source": "/monetary/利率理论"
  },
  {
    "term": "米德冲突",
    "course": "货币银行学",
    "def": "米德冲突是指在某些情况下，单独使用支出调整政策——货币政策和财政政策追求内、外部均衡，将会导致一国内部均衡与外部均衡之间的冲突。",
    "source": "/monetary/内外均衡理论"
  },
  {
    "term": "菲利普斯曲线",
    "course": "货币银行学",
    "def": "菲利普斯曲线由英国经济学家 A.W. 菲利普斯首先提出；其原始研究描述的是失业率与货币工资增长率之间的负相关关系，后来才常被引申为通货膨胀率与失业率之间的短期替代关系。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "表外业务",
    "course": "货币银行学",
    "def": "表外业务是指凡未列入银行资产负债表内且不影响资产负债总额的业务。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "货币局制度",
    "course": "货币银行学",
    "def": "货币局制度是指从法律上隐含地承诺本国或地区货币按固定汇率兑换某种特定的外币，同时限制官方的货币发行，以确保履行法定义务，如阿根廷和我国香港特别行政区。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "货币层次",
    "course": "货币银行学",
    "def": "货币层次是指各国中央银行在确定货币供给的统计口径时以金融资产流动性的大小作为标准，并根据自身政策目的的特点和需要对货币所划分的层次。",
    "source": "/monetary/货币供求理论"
  },
  {
    "term": "货币市场",
    "course": "货币银行学",
    "def": "货币市场是一年和一年以内短期资金融通的市场，包括同业拆借市场、银行间债券市场、大额可转让存单市场、商业票据市场和国库券市场等子市场。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "货币政策时滞",
    "course": "货币银行学",
    "def": "货币政策时滞是指政策从制定到获得主要的或全部的效果所经历的时间。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "购买力平价",
    "course": "货币银行学",
    "def": "购买力平价是由瑞典经济学家卡塞尔在 20 世纪初提出的，用来解释长期汇率决定的基础。",
    "source": "/monetary/汇率理论"
  },
  {
    "term": "资产结构调整效应",
    "course": "货币银行学",
    "def": "资产结构调整效应也称财富分配效应，是指由物价上涨所带来的家庭财产不同构成部分的价值有升有降的现象。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "资产证券化",
    "course": "货币银行学",
    "def": "资产证券化是指将已经存在的信贷资产集中起来并重新分割为证券进而转卖给市场上的投资者，从而使此项资产在原持有者的资产负债表上消失的融资形式。",
    "source": "/monetary/金融中介体系"
  },
  {
    "term": "资本市场",
    "course": "货币银行学",
    "def": "资本市场一般指交易期限在一年以上的市场，主要包括股票市场和债券市场，满足工商企业的中长期投资需求和政府财政赤字的需要。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "远期",
    "course": "货币银行学",
    "def": "远期是指在确定的未来某一时期，按照确定的价格买卖一定数量的某种资产的协议。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "通货膨胀",
    "course": "货币银行学",
    "def": "在西方经济学教科书中，通常将通货膨胀定义为商品和服务的货币价格总水平持续上涨的现象。",
    "source": "/monetary/通货膨胀与通货紧缩"
  },
  {
    "term": "通货膨胀目标制",
    "course": "货币银行学",
    "def": "通货膨胀目标制是一套用于货币政策决策的框架，是中央银行直接以通货膨胀为目标并对外公布该目标的货币政策制度。",
    "source": "/monetary/货币政策"
  },
  {
    "term": "金融工具",
    "course": "货币银行学",
    "def": "金融工具又称金融资产，它是一种能够证明金融交易的金额、期限以及价格的书面文件，对于债权、债务双方的权利和义务具有法律上的约束意义。",
    "source": "/monetary/金融市场"
  },
  {
    "term": "金融监管成本",
    "course": "货币银行学",
    "def": "金融监管成本，大致分为显性成本和隐性成本两个部分。",
    "source": "/monetary/金融监管体系"
  },
  {
    "term": "“三个有利于”标准",
    "course": "社会主义经济学",
    "def": "“三个有利于”标准指: - 1. 是否有利于发展社会主义社会的生产力 - 2. 是否有利于增强社会主义国家的综合国力 - 3. 是否有利于提高人民的生活水平作为判断改革和各方面工作是非得失的标准。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "“华盛顿共识”与“北京共识”",
    "course": "社会主义经济学",
    "def": "华盛顿共识这一术语最初由经济学家约翰·威廉姆森于 1989 年提出。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "“后起者优势”",
    "course": "社会主义经济学",
    "def": "“后起者优势”是指后起发展国家面临的外部环境相对较好，尤其是技术高度发达，这样它就可以跳过某些技术发展阶段，直接采用新技术。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "“市场失灵”",
    "course": "社会主义经济学",
    "def": "市场失灵是指市场竞争所实现的资源配置没有达到帕累托最优，或指市场机制不能实现某些合意的社会经济目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "“看不见的手”",
    "course": "社会主义经济学",
    "def": "“看不见的手”是亚当·斯密提出的经济自由主义的政策思想，推崇市场机制的作用。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "“诺思悖论”",
    "course": "社会主义经济学",
    "def": "“诺思悖论”是指一个能促进经济持续快速增长的有效率产权制度依赖于国家对产权进行有效的界定与保护，但受双重目标的驱动，国家在界定与保护产权过程中受交易费用和竞争的双重约束，会对不同的利益集团采取歧视性的政策，从而会容忍低效",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "中间扩散型制度变迁方式",
    "course": "社会主义经济学",
    "def": "当利益独立化的地方政府成为沟通权力中心的制度供给意愿与微观主体的制度创新需求的中介环节时，就有可能突破权力中心设置的制度创新进入壁垒，从而使权力中心的垄断租金最大化与保护有效率的产权结构之间达成一致，化解“诺思悖论”，这",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "二元反差指数",
    "course": "社会主义经济学",
    "def": "二元反差指数是指工业或非农业产值比重与劳动力比重之差的绝对值。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "二元对比系数",
    "course": "社会主义经济学",
    "def": "二元对比系数是指二元经济结构中农业比较劳动生产率与非农业比较劳动生产率的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "二元经济结构",
    "course": "社会主义经济学",
    "def": "二元经济结构是指以城市工业为主的现代部门与以农村农业为主的传统部门并存，传统部门比重过大、现代部门发展不足，以及城乡差距十分明显的经济结构。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产业",
    "course": "社会主义经济学",
    "def": "产业是指生产相似或相同产品的一系列企业。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产业结构",
    "course": "社会主义经济学",
    "def": "产业结构是指国民经济内部各产业之间在再生产过程中形成的经济联系和数量比例关系。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "产权",
    "course": "社会主义经济学",
    "def": "产权是一种通过社会强制而实现的对某种经济物品的多种用途进行选择的权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "产权制度",
    "course": "社会主义经济学",
    "def": "产权制度是指既定产权关系和产权规则结合而成的且能对产权关系实行有效的组合、调节和保护的制度安排。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "产权规则",
    "course": "社会主义经济学",
    "def": "产权规则是指一个人拥有资源配置权力的大小与其所拥有的资产数量正相关，即拥有的资产越多，所拥有的资源配置权力就越大。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "代理成本",
    "course": "社会主义经济学",
    "def": "代理成本是指在所有权与控制权相分离的条件下，由于委托人与代理人的效用函数不完全一致，代理制的引入必然会诱发一定的成本。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "代理问题",
    "course": "社会主义经济学",
    "def": "代理人除了追求更高的货币收益外，还力图通过对非货币物品的追求实现可能多的非货币收益。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业共同治理",
    "course": "社会主义经济学",
    "def": "企业共同治理强调决策的共同参与和监督的相互制约。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业所有权",
    "course": "社会主义经济学",
    "def": "企业所有权指企业对其合法占有的财产所拥有的使用、收益和处分的权利。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "企业治理结构",
    "course": "社会主义经济学",
    "def": "企业治理结构也称为公司法人治理结构，是指所有者、经营者和监督者之间透过公司权力机关（股东大会），经营决策与执行机关（董事会、经理），监督机关（监事会）而形成权责明确，相互制约，协调运转和科学决策的联系，并依法律、法规、规",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "使用权能",
    "course": "社会主义经济学",
    "def": "使用权能是指不改变财产的所有和占有性质，依其用途而对其加以利用的可能性，是人与人之间因利用财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "供给主导型制度变迁方式",
    "course": "社会主义经济学",
    "def": "供给主导型制度变迁方式是指把这种由权力中心推进的强制性制度变迁，其含义是在一定的宪法秩序和行为的伦理道德规范下，权力中心提供新的制度安排的能力与意愿是决定制度变迁的主导因素，而这种能力与意愿主要决定于一个社会的各既得利益",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "充分就业",
    "course": "社会主义经济学",
    "def": "充分就业是指每一个愿意工作的劳动者按其能够接受的工资全部找到职业的一种经济状态。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "公共产品",
    "course": "社会主义经济学",
    "def": "公共产品是指那些消费不具有排他性和可耗竭性，但收费存在困难的产品。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "公共服务均等化",
    "course": "社会主义经济学",
    "def": "公共服务均等化，主要是指全体公民享有基本公共服务的机会均等、结果大体相等，同时尊重社会成员的自由选择权。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "内部人控制",
    "course": "社会主义经济学",
    "def": "内部人控制是指国有企业的经营者在经济转型过程中逐渐掌握了大部分控制权，并且这种控制权的获得往往是通过与职工“合谋”完成的。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "制度",
    "course": "社会主义经济学",
    "def": "制度是指一系列被制定出来的规则、守法程序和行为的伦理道德规范，旨在约束追求主体福利或效用最大化的个人行为。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "制度安排",
    "course": "社会主义经济学",
    "def": "制度安排是在宪法秩序下约束特定行为模式和关系、界定交换条件的一系列具体的操作规则。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "刺激一致性约束",
    "course": "社会主义经济学",
    "def": "刺激一致性约束指于代理人是合同的接受者，机制所提供的刺激必须要能诱使代理人自愿地选择根据他们所属类型而设定的合同。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "占有权能",
    "course": "社会主义经济学",
    "def": "占有权能是指人对财产直接加以控制的可能性，是所有者与他人之间因对财产进行实际控制而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "参与约束",
    "course": "社会主义经济学",
    "def": "参与约束也称为个人理性约束，是对代理人的行为提出一种理性化假设。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "可持续发展",
    "course": "社会主义经济学",
    "def": "可持续发展理论是人类发展观的重大进步，它强调经济、社会、资源和环境保护的协调发展。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "国内生产总值（GDP）",
    "course": "社会主义经济学",
    "def": "国内生产总值则是指一国在一定时期（通常是一年）内，在其领土范围内，本国居民与外国居民生产的最终产品和劳务总量的货币表现。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "国民生产总值（GNP）",
    "course": "社会主义经济学",
    "def": "国民生产总值是指指一个国家（或地区）在一定时期（通常为一年）内，国民经济各部门所生产的、以货币表现的全部社会最终产品和劳务价值的总和。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "基础产业",
    "course": "社会主义经济学",
    "def": "基础产业是指在一国的国民经济发展中处于基础地位，对其他产业的发展起着制约和决定作用，决定其他产业发展水平的产业群，它的产品通常要成为后续产业部门加工、再加工及生产过程中缺一不可的投入品或消耗品，通常具有不可再生性质。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "增量改革",
    "course": "社会主义经济学",
    "def": "增量改革是指在不率先触动既得利益格局的前提下，在边际上推进市场取向的改革，也就是说，在等级规则作用较小的边际上，选择具有帕累托改进意义的利益调整方式进行体制变革，逐渐向市场经济体制过渡。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "处分权能",
    "course": "社会主义经济学",
    "def": "处分权能是指为法律所保障的实施旨在改变财产的经济用途或状态的行为的可能性，它所反映的是人在变更财产的过程中所产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "外向型工业化战略",
    "course": "社会主义经济学",
    "def": "外向型工业化战略的基本内涵就是： 利用开放与全球产业结构调整和转移的趋势，基于劳动成本优势构建我国开放背景下的工业化模式。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "外部约束均衡",
    "course": "社会主义经济学",
    "def": "理性的委托人将在约束成本在边际上等于代理成本的水平上实现对代理人的外部约束均衡，这一均衡调整过程将使约束成本和代理成本之和达到最小化。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "宏观收入分配过程",
    "course": "社会主义经济学",
    "def": "宏观层次的收入调节过程是建立在微观收入分配过程基础上并独立于这一分配过程的再分配过程。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "宪法秩序",
    "course": "社会主义经济学",
    "def": "宪法秩序是指用以界定国家的产权和控制的基本结构，它包括确立生产、交换和分配的一整套政治、社会和法律的基本规则，它为集体选择确立了原则，从而是制定规则的规则。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "市场",
    "course": "社会主义经济学",
    "def": "市场是指交换的场所、渠道和纽带。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "市场机制",
    "course": "社会主义经济学",
    "def": "市市场机制是指在市场交易关系中形成的以价格、供求和竞争三位一体的互动关系为基础的经济运行和调节的一套有机系统。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "市场经济",
    "course": "社会主义经济学",
    "def": "市场经济是指由市场机制配置资源的经济。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "微观收入分配过程",
    "course": "社会主义经济学",
    "def": "微观收入分配过程是通过市场机制的作用实现的。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "所有权",
    "course": "社会主义经济学",
    "def": "按照马克思的定义，所有权是确定物的最终归属，表明主体对确定物的独占和垄断的财产权利，是同一物上不依赖于其他权利而独立存在的财产权利。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "技术进步",
    "course": "社会主义经济学",
    "def": "技术进步是指人们在生产中使用效率更高的劳动手段和工艺方法推动社会生产力发展的运动过程。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "按劳分配",
    "course": "社会主义经济学",
    "def": "按劳分配是指社会总产品在作了必要的扣除之后，按劳动者向社会提供的有效劳动量来分配个人消费品，多劳多得，少劳少得，不劳不得的分配制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "收益权能",
    "course": "社会主义经济学",
    "def": "收益权能是指获取基于所有者财产而产生的经济利益的可能性，是人们因获取追加财产而产生的权利义务关系。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "比较劳动生产率",
    "course": "社会主义经济学",
    "def": "比较劳动生产率是指一个部门的产值比重（或收入比重）与在此部门就业的劳动力比重的比率。",
    "source": "/socialist/社会主义市场经济条件下的经济结构调整"
  },
  {
    "term": "法人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "混合所有制经济",
    "course": "社会主义经济学",
    "def": "混合所有制经济是由不同性质的所有制经济组合而成的一种经济形式。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "渐进式改革",
    "course": "社会主义经济学",
    "def": "渐进式改革是在工业化和社会主义宪法制度的基础上进行的市场化改革，强调利用已有的组织资源推进改革，在基本不触动既得利益格局的前提下实行增量改革。",
    "source": "/socialist/社会主义市场经济理论"
  },
  {
    "term": "激励核心",
    "course": "社会主义经济学",
    "def": "激励的核心是将代理人对个人效用的追求转化为对企业利润最大化的追求。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "物价稳定",
    "course": "社会主义经济学",
    "def": "物价稳定不是指各种商品和要素之间相对价格的稳定，而是指全社会范围内价格总水平的稳定。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "目的",
    "course": "社会主义经济学",
    "def": "设计一套对代理人的激励约束机制，使代理人在追求自身利益最大化的同时，实现委托人利益的最大化。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "相机治理机制",
    "course": "社会主义经济学",
    "def": "相对于不同的企业经营状态，对应着不同的企业所有权安排。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "社会主义初级阶段",
    "course": "社会主义经济学",
    "def": "社会主义初级阶段是指我国在生产力落后、商品经济不发达条件下建设社会主义必然要经历的特定历史阶段，即从我国进入社会主义到基本实现社会主义现代化的整个历史阶段。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "社会保障",
    "course": "社会主义经济学",
    "def": "社会保障是指国家和社会通过立法对国民收入进行分配和再分配，为社会成员特别是生活有特殊困难的个人或家庭提供基本生活保障的一种制度。",
    "source": "/socialist/社会主义市场经济条件下的分配制度"
  },
  {
    "term": "竞争性国有企业",
    "course": "社会主义经济学",
    "def": "竞争性国有企业是指那些国家投资建成的、基本上不存在进入与退出障碍、同一产业部门内存在众多企业、企业产品基本上具有同质性和可分性、以利润为经营目标的国有企业。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "等级规则",
    "course": "社会主义经济学",
    "def": "等级规则是指首先构建一个层层隶属的金字塔形的等级构架，再界定每一个行为人在这个等级构架中所处的位置，然后再进一步界定与这个等级位置相适应的资源配置权力。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "经济全球化",
    "course": "社会主义经济学",
    "def": "从广义上理解，经济全球化这一概念代表着经济活动从国内向全球范围扩张的过程以及随之而出现的种种经济、社会、政治、生活等诸多方面的改变过程。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "经济发展",
    "course": "社会主义经济学",
    "def": "经济发展是指一个国家或地区经济增长以及经济结构、社会结构不断优化和高度化的演进过程。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济发展模式",
    "course": "社会主义经济学",
    "def": "经济发展模式是指在一定时期内国民经济发展战略及其生产力要素增长机制、运行原则的特殊类型，它包括经济发展的目标、方式、发展重心、步骤等一系列要素。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济增长",
    "course": "社会主义经济学",
    "def": "经济增长是指一个经济社会的实际产量（或实际收入）的长期增加，即按不变价格水平所测定的充分就业产量的增加。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济增长方式转变",
    "course": "社会主义经济学",
    "def": "经济增长方式的转变，是指经济增长从主要依靠生产要素的数量扩张转向主要通过提高投入生产要素的使用效率来实现，即从粗放型向集约型增长方式的转变。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "经济开放",
    "course": "社会主义经济学",
    "def": "经济开放是指经济体系通过产品、服务、技术、要素等的流动与外界发生联系。",
    "source": "/socialist/社会主义对外经济关系"
  },
  {
    "term": "经济政策手段",
    "course": "社会主义经济学",
    "def": "经济政策手段是国家为了实现经济政策目标所采取的方法，它包括政策工具和实施政策方法两个方面。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "经济法制手段",
    "course": "社会主义经济学",
    "def": "经济法制手段是指国家依靠法律的强制力量来保证经济政策目标实现的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "绿色 GDP",
    "course": "社会主义经济学",
    "def": "1993 年联合国有关统计机构提出了生态国内生产总值“EDP”的概念，即绿色 GDP，也就是在 GDP 的基础上减掉创造 GDP 所消耗的资源价值，然后再减掉创造 GDP 所造成污染的治理成本。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "股份公司",
    "course": "社会主义经济学",
    "def": "股份公司是由一定人数以上的股东所发起组织、全部资本被划分为若干等额股份、股东就其所认购的股份对公司承担有限责任、股票可以在社会上公开发行和自由转让的公司。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "自然人企业制度",
    "course": "社会主义经济学",
    "def": "按照财产的组织形式和所承担的法律责任，企业的组织形式可分为自然人企业和法人企业。",
    "source": "/socialist/社会主义企业制度与国有企业改革"
  },
  {
    "term": "行为的伦理道德规范",
    "course": "社会主义经济学",
    "def": "行为的伦理道德规范来源于人们对现实的理解和意识形态，是与对现实契约关系的正义或公平的判断相连的，它对于赋予宪法秩序和制度安排的合法性是至关重要的。",
    "source": "/socialist/社会主义经济增长与经济发展"
  },
  {
    "term": "行政干预下的经营者控制",
    "course": "社会主义经济学",
    "def": "我国的国有企业改革主要是通过政企关系的市场化和契约化来实现权责利的再分配，政府赋予经营者很大的经营权，并监控经营者的行为，从而形成了有别于内部人控制行政干预下的经营者控制型企业治理结构。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "行政管制手段",
    "course": "社会主义经济学",
    "def": "行政管制手段是国家行政管理部门凭借政权的威力，通过发布命令、指示等形式来干预经济生活的手段。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "财政政策手段",
    "course": "社会主义经济学",
    "def": "财政政策的核心是通过政府的收入和支出调节供求关系，实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "货币政策手段",
    "course": "社会主义经济学",
    "def": "货币政策的核心是中央银行通过金融系统和金融市场，调节国民经济中的货币供应量和利率，影响投资和消费活动，进而实现一定的政策目标。",
    "source": "/socialist/社会主义市场经济条件下的政府调节"
  },
  {
    "term": "遇到的问题",
    "course": "社会主义经济学",
    "def": "当委托人向代理人了解他们所属类型的信息时，除非通过货币支付或者某种控制工具作为刺激和代驾，否则代理人就不会如实相告。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "道德风险",
    "course": "社会主义经济学",
    "def": "道德风险是指由于信息不对称，从事经济活动的人在最大限度地增进自身效用时作出不利于他人的行动。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "重要条件",
    "course": "社会主义经济学",
    "def": "获取代理人行为的信息是设计最优激励约束机制的重要条件。",
    "source": "/socialist/国有企业治理结构的创新"
  },
  {
    "term": "集体经济",
    "course": "社会主义经济学",
    "def": "集体经济是由部分劳动群众共同占有生产资料的一种公有制形式。",
    "source": "/socialist/社会主义经济制度的本质特征"
  },
  {
    "term": "需求诱致型制度变迁方式",
    "course": "社会主义经济学",
    "def": "需求诱致型制度变迁方式指个人或一群人在给定的约束条件下，为确立预期能导致自身利益最大化的制度安排和权利界定而自发组织实施制度创新。",
    "source": "/socialist/向社会主义市场经济体制的渐进过渡"
  },
  {
    "term": "非货币物品",
    "course": "社会主义经济学",
    "def": "指那些通常不以货币来进行买卖，但和那些能以货币买卖的物品一样可以给当事人带来效用的消费项目。",
    "source": "/socialist/国有企业治理结构的创新"
  }
]

export const COURSES = ["西方经济学","货币银行学","财政学","国际经济学","社会主义经济学"]
