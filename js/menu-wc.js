'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api.taskmon.ai documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' :
                                            'id="xs-controllers-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' :
                                        'id="xs-injectables-links-module-AppModule-d9868e0206262acc3717fc5e621b2239d20b2c2cf9b4fe6b70186fca7e03a0b58856f87d6e6b361815032b85558d904c31f21d90cd41c4a731ebacedb7de8239"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' :
                                            'id="xs-controllers-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' :
                                        'id="xs-injectables-links-module-AuthModule-787ba1e301e7a352be889ed997489853b583b80a4a05c7bcce38e5c7ed81dc8fbe5e2baa946c1dc528ea07e66d16fd4c180980da9a43fcb6d0010061659dc5e2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BoardModule.html" data-type="entity-link" >BoardModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BoardModule-000c99eadd6152de56b0a619ec9aaafca32450d686b5e4dd608342de74452ba5fa412e3e241073fbbb034c3f0ee71ed8b02b9f013a1ef27833240cae77568e12"' : 'data-bs-target="#xs-injectables-links-module-BoardModule-000c99eadd6152de56b0a619ec9aaafca32450d686b5e4dd608342de74452ba5fa412e3e241073fbbb034c3f0ee71ed8b02b9f013a1ef27833240cae77568e12"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BoardModule-000c99eadd6152de56b0a619ec9aaafca32450d686b5e4dd608342de74452ba5fa412e3e241073fbbb034c3f0ee71ed8b02b9f013a1ef27833240cae77568e12"' :
                                        'id="xs-injectables-links-module-BoardModule-000c99eadd6152de56b0a619ec9aaafca32450d686b5e4dd608342de74452ba5fa412e3e241073fbbb034c3f0ee71ed8b02b9f013a1ef27833240cae77568e12"' }>
                                        <li class="link">
                                            <a href="injectables/BoardService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ColumnService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ColumnModule.html" data-type="entity-link" >ColumnModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ColumnModule-cb9e00826120b310d033eda9aefd717fbe0e00885fe1d880a0e6b311ef14c937c12f4acb29233ef84ee6fb7fff7a603480743b313164c4d0eef98336ab4de77e"' : 'data-bs-target="#xs-injectables-links-module-ColumnModule-cb9e00826120b310d033eda9aefd717fbe0e00885fe1d880a0e6b311ef14c937c12f4acb29233ef84ee6fb7fff7a603480743b313164c4d0eef98336ab4de77e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ColumnModule-cb9e00826120b310d033eda9aefd717fbe0e00885fe1d880a0e6b311ef14c937c12f4acb29233ef84ee6fb7fff7a603480743b313164c4d0eef98336ab4de77e"' :
                                        'id="xs-injectables-links-module-ColumnModule-cb9e00826120b310d033eda9aefd717fbe0e00885fe1d880a0e6b311ef14c937c12f4acb29233ef84ee6fb7fff7a603480743b313164c4d0eef98336ab4de77e"' }>
                                        <li class="link">
                                            <a href="injectables/ColumnService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' :
                                        'id="xs-injectables-links-module-PrismaModule-b450d622665d914bb7a48e2013c30446d3b4c970c9c681d1f192f1aa5793e66fc7639a4edd40909bac6a4ab0b1f2e4338fdab3d4184c82f8c1ffcab33ce4f6b5"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubtaskModule.html" data-type="entity-link" >SubtaskModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubtaskModule-2e5b1bcaf88d4e284902553d81608920847b3ca1c36295b540811934c8d78f522a26a042eab0053e372ec30ad81e61dd12dc7645f9d4dbe804b9821063ca3824"' : 'data-bs-target="#xs-injectables-links-module-SubtaskModule-2e5b1bcaf88d4e284902553d81608920847b3ca1c36295b540811934c8d78f522a26a042eab0053e372ec30ad81e61dd12dc7645f9d4dbe804b9821063ca3824"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubtaskModule-2e5b1bcaf88d4e284902553d81608920847b3ca1c36295b540811934c8d78f522a26a042eab0053e372ec30ad81e61dd12dc7645f9d4dbe804b9821063ca3824"' :
                                        'id="xs-injectables-links-module-SubtaskModule-2e5b1bcaf88d4e284902553d81608920847b3ca1c36295b540811934c8d78f522a26a042eab0053e372ec30ad81e61dd12dc7645f9d4dbe804b9821063ca3824"' }>
                                        <li class="link">
                                            <a href="injectables/SubtaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubtaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-e0a2d8eaf10dad3f1b719996be36cd8ae8e771cb7788cc9bf4d1b68f951a21fc574be30a68de7c4bfe81e3bee62141c719b64e4ab28aa3b05f2800e5ccdf5265"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-e0a2d8eaf10dad3f1b719996be36cd8ae8e771cb7788cc9bf4d1b68f951a21fc574be30a68de7c4bfe81e3bee62141c719b64e4ab28aa3b05f2800e5ccdf5265"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-e0a2d8eaf10dad3f1b719996be36cd8ae8e771cb7788cc9bf4d1b68f951a21fc574be30a68de7c4bfe81e3bee62141c719b64e4ab28aa3b05f2800e5ccdf5265"' :
                                        'id="xs-injectables-links-module-TaskModule-e0a2d8eaf10dad3f1b719996be36cd8ae8e771cb7788cc9bf4d1b68f951a21fc574be30a68de7c4bfe81e3bee62141c719b64e4ab28aa3b05f2800e5ccdf5265"' }>
                                        <li class="link">
                                            <a href="injectables/SubtaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubtaskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AffectedRows.html" data-type="entity-link" >AffectedRows</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateBoard.html" data-type="entity-link" >AggregateBoard</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateColumn.html" data-type="entity-link" >AggregateColumn</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateSubtask.html" data-type="entity-link" >AggregateSubtask</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateTask.html" data-type="entity-link" >AggregateTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/AggregateWallet.html" data-type="entity-link" >AggregateWallet</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthDto.html" data-type="entity-link" >AuthDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Board.html" data-type="entity-link" >Board</a>
                            </li>
                            <li class="link">
                                <a href="classes/Board-1.html" data-type="entity-link" >Board</a>
                            </li>
                            <li class="link">
                                <a href="classes/Board-2.html" data-type="entity-link" >Board</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardAggregateArgs.html" data-type="entity-link" >BoardAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardAvgAggregate.html" data-type="entity-link" >BoardAvgAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardAvgAggregateInput.html" data-type="entity-link" >BoardAvgAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardAvgOrderByAggregateInput.html" data-type="entity-link" >BoardAvgOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCount.html" data-type="entity-link" >BoardCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCountAggregate.html" data-type="entity-link" >BoardCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCountAggregateInput.html" data-type="entity-link" >BoardCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCountOrderByAggregateInput.html" data-type="entity-link" >BoardCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateInput.html" data-type="entity-link" >BoardCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateManyInput.html" data-type="entity-link" >BoardCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateManyWalletInput.html" data-type="entity-link" >BoardCreateManyWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateManyWalletInputEnvelope.html" data-type="entity-link" >BoardCreateManyWalletInputEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateNestedManyWithoutWalletInput.html" data-type="entity-link" >BoardCreateNestedManyWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateNestedOneWithoutColumnsInput.html" data-type="entity-link" >BoardCreateNestedOneWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateOrConnectWithoutColumnsInput.html" data-type="entity-link" >BoardCreateOrConnectWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateOrConnectWithoutWalletInput.html" data-type="entity-link" >BoardCreateOrConnectWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateWithoutColumnsInput.html" data-type="entity-link" >BoardCreateWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardCreateWithoutWalletInput.html" data-type="entity-link" >BoardCreateWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardGroupBy.html" data-type="entity-link" >BoardGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardGroupByArgs.html" data-type="entity-link" >BoardGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardListRelationFilter.html" data-type="entity-link" >BoardListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMaxAggregate.html" data-type="entity-link" >BoardMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMaxAggregateInput.html" data-type="entity-link" >BoardMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMaxOrderByAggregateInput.html" data-type="entity-link" >BoardMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMinAggregate.html" data-type="entity-link" >BoardMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMinAggregateInput.html" data-type="entity-link" >BoardMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardMinOrderByAggregateInput.html" data-type="entity-link" >BoardMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardOrderByRelationAggregateInput.html" data-type="entity-link" >BoardOrderByRelationAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardOrderByWithAggregationInput.html" data-type="entity-link" >BoardOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardOrderByWithRelationInput.html" data-type="entity-link" >BoardOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardRelationFilter.html" data-type="entity-link" >BoardRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardResolver.html" data-type="entity-link" >BoardResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardScalarWhereInput.html" data-type="entity-link" >BoardScalarWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardScalarWhereWithAggregatesInput.html" data-type="entity-link" >BoardScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardSumAggregate.html" data-type="entity-link" >BoardSumAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardSumAggregateInput.html" data-type="entity-link" >BoardSumAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardSumOrderByAggregateInput.html" data-type="entity-link" >BoardSumOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedCreateInput.html" data-type="entity-link" >BoardUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedCreateNestedManyWithoutWalletInput.html" data-type="entity-link" >BoardUncheckedCreateNestedManyWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedCreateWithoutColumnsInput.html" data-type="entity-link" >BoardUncheckedCreateWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedCreateWithoutWalletInput.html" data-type="entity-link" >BoardUncheckedCreateWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateInput.html" data-type="entity-link" >BoardUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateManyInput.html" data-type="entity-link" >BoardUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateManyWithoutBoardInput.html" data-type="entity-link" >BoardUncheckedUpdateManyWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateManyWithoutWalletNestedInput.html" data-type="entity-link" >BoardUncheckedUpdateManyWithoutWalletNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateWithoutColumnsInput.html" data-type="entity-link" >BoardUncheckedUpdateWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUncheckedUpdateWithoutWalletInput.html" data-type="entity-link" >BoardUncheckedUpdateWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateInput.html" data-type="entity-link" >BoardUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateManyMutationInput.html" data-type="entity-link" >BoardUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateManyWithoutWalletNestedInput.html" data-type="entity-link" >BoardUpdateManyWithoutWalletNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateManyWithWhereWithoutWalletInput.html" data-type="entity-link" >BoardUpdateManyWithWhereWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateOneRequiredWithoutColumnsNestedInput.html" data-type="entity-link" >BoardUpdateOneRequiredWithoutColumnsNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateWithoutColumnsInput.html" data-type="entity-link" >BoardUpdateWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateWithoutWalletInput.html" data-type="entity-link" >BoardUpdateWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpdateWithWhereUniqueWithoutWalletInput.html" data-type="entity-link" >BoardUpdateWithWhereUniqueWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpsertWithoutColumnsInput.html" data-type="entity-link" >BoardUpsertWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardUpsertWithWhereUniqueWithoutWalletInput.html" data-type="entity-link" >BoardUpsertWithWhereUniqueWithoutWalletInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardWalletIdNameCompoundUniqueInput.html" data-type="entity-link" >BoardWalletIdNameCompoundUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardWhereInput.html" data-type="entity-link" >BoardWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoardWhereUniqueInput.html" data-type="entity-link" >BoardWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoolFieldUpdateOperationsInput.html" data-type="entity-link" >BoolFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoolFilter.html" data-type="entity-link" >BoolFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BoolWithAggregatesFilter.html" data-type="entity-link" >BoolWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column-1.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column-2.html" data-type="entity-link" >Column</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnAggregateArgs.html" data-type="entity-link" >ColumnAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnAvgAggregate.html" data-type="entity-link" >ColumnAvgAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnAvgAggregateInput.html" data-type="entity-link" >ColumnAvgAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnAvgOrderByAggregateInput.html" data-type="entity-link" >ColumnAvgOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnBoardIdNameCompoundUniqueInput.html" data-type="entity-link" >ColumnBoardIdNameCompoundUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCount.html" data-type="entity-link" >ColumnCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCountAggregate.html" data-type="entity-link" >ColumnCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCountAggregateInput.html" data-type="entity-link" >ColumnCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCountOrderByAggregateInput.html" data-type="entity-link" >ColumnCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateInput.html" data-type="entity-link" >ColumnCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateManyBoardInput.html" data-type="entity-link" >ColumnCreateManyBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateManyBoardInputEnvelope.html" data-type="entity-link" >ColumnCreateManyBoardInputEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateManyInput.html" data-type="entity-link" >ColumnCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateNestedManyWithoutBoardInput.html" data-type="entity-link" >ColumnCreateNestedManyWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateNestedOneWithoutTasksInput.html" data-type="entity-link" >ColumnCreateNestedOneWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateOrConnectWithoutBoardInput.html" data-type="entity-link" >ColumnCreateOrConnectWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateOrConnectWithoutTasksInput.html" data-type="entity-link" >ColumnCreateOrConnectWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateWithoutBoardInput.html" data-type="entity-link" >ColumnCreateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnCreateWithoutTasksInput.html" data-type="entity-link" >ColumnCreateWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnGroupBy.html" data-type="entity-link" >ColumnGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnGroupByArgs.html" data-type="entity-link" >ColumnGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnListRelationFilter.html" data-type="entity-link" >ColumnListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMaxAggregate.html" data-type="entity-link" >ColumnMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMaxAggregateInput.html" data-type="entity-link" >ColumnMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMaxOrderByAggregateInput.html" data-type="entity-link" >ColumnMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMinAggregate.html" data-type="entity-link" >ColumnMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMinAggregateInput.html" data-type="entity-link" >ColumnMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnMinOrderByAggregateInput.html" data-type="entity-link" >ColumnMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnOrderByRelationAggregateInput.html" data-type="entity-link" >ColumnOrderByRelationAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnOrderByWithAggregationInput.html" data-type="entity-link" >ColumnOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnOrderByWithRelationInput.html" data-type="entity-link" >ColumnOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnRelationFilter.html" data-type="entity-link" >ColumnRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnResolver.html" data-type="entity-link" >ColumnResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnScalarWhereInput.html" data-type="entity-link" >ColumnScalarWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnScalarWhereWithAggregatesInput.html" data-type="entity-link" >ColumnScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnSumAggregate.html" data-type="entity-link" >ColumnSumAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnSumAggregateInput.html" data-type="entity-link" >ColumnSumAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnSumOrderByAggregateInput.html" data-type="entity-link" >ColumnSumOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedCreateInput.html" data-type="entity-link" >ColumnUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedCreateNestedManyWithoutBoardInput.html" data-type="entity-link" >ColumnUncheckedCreateNestedManyWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedCreateWithoutBoardInput.html" data-type="entity-link" >ColumnUncheckedCreateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedCreateWithoutTasksInput.html" data-type="entity-link" >ColumnUncheckedCreateWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateInput.html" data-type="entity-link" >ColumnUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateManyInput.html" data-type="entity-link" >ColumnUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateManyWithoutBoardNestedInput.html" data-type="entity-link" >ColumnUncheckedUpdateManyWithoutBoardNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateManyWithoutColumnsInput.html" data-type="entity-link" >ColumnUncheckedUpdateManyWithoutColumnsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateWithoutBoardInput.html" data-type="entity-link" >ColumnUncheckedUpdateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUncheckedUpdateWithoutTasksInput.html" data-type="entity-link" >ColumnUncheckedUpdateWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateInput.html" data-type="entity-link" >ColumnUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateManyMutationInput.html" data-type="entity-link" >ColumnUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateManyWithoutBoardNestedInput.html" data-type="entity-link" >ColumnUpdateManyWithoutBoardNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateManyWithWhereWithoutBoardInput.html" data-type="entity-link" >ColumnUpdateManyWithWhereWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateOneRequiredWithoutTasksNestedInput.html" data-type="entity-link" >ColumnUpdateOneRequiredWithoutTasksNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateWithoutBoardInput.html" data-type="entity-link" >ColumnUpdateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateWithoutTasksInput.html" data-type="entity-link" >ColumnUpdateWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpdateWithWhereUniqueWithoutBoardInput.html" data-type="entity-link" >ColumnUpdateWithWhereUniqueWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpsertWithoutTasksInput.html" data-type="entity-link" >ColumnUpsertWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnUpsertWithWhereUniqueWithoutBoardInput.html" data-type="entity-link" >ColumnUpsertWithWhereUniqueWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnWhereInput.html" data-type="entity-link" >ColumnWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/ColumnWhereUniqueInput.html" data-type="entity-link" >ColumnWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBoardInput.html" data-type="entity-link" >CreateBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBoardInput-1.html" data-type="entity-link" >CreateBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateColumnInput.html" data-type="entity-link" >CreateColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyBoardArgs.html" data-type="entity-link" >CreateManyBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyColumnArgs.html" data-type="entity-link" >CreateManyColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManySubtaskArgs.html" data-type="entity-link" >CreateManySubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyTaskArgs.html" data-type="entity-link" >CreateManyTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateManyWalletArgs.html" data-type="entity-link" >CreateManyWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneBoardArgs.html" data-type="entity-link" >CreateOneBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneColumnArgs.html" data-type="entity-link" >CreateOneColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneSubtaskArgs.html" data-type="entity-link" >CreateOneSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneTaskArgs.html" data-type="entity-link" >CreateOneTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOneWalletArgs.html" data-type="entity-link" >CreateOneWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubTaskInput.html" data-type="entity-link" >CreateSubTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskInput.html" data-type="entity-link" >CreateTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeFieldUpdateOperationsInput.html" data-type="entity-link" >DateTimeFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeFilter.html" data-type="entity-link" >DateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateTimeWithAggregatesFilter.html" data-type="entity-link" >DateTimeWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyBoardArgs.html" data-type="entity-link" >DeleteManyBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyColumnArgs.html" data-type="entity-link" >DeleteManyColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManySubtaskArgs.html" data-type="entity-link" >DeleteManySubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyTaskArgs.html" data-type="entity-link" >DeleteManyTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteManyWalletArgs.html" data-type="entity-link" >DeleteManyWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneBoardArgs.html" data-type="entity-link" >DeleteOneBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneColumnArgs.html" data-type="entity-link" >DeleteOneColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneSubtaskArgs.html" data-type="entity-link" >DeleteOneSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneTaskArgs.html" data-type="entity-link" >DeleteOneTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeleteOneWalletArgs.html" data-type="entity-link" >DeleteOneWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstBoardArgs.html" data-type="entity-link" >FindFirstBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstBoardOrThrowArgs.html" data-type="entity-link" >FindFirstBoardOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstColumnArgs.html" data-type="entity-link" >FindFirstColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstColumnOrThrowArgs.html" data-type="entity-link" >FindFirstColumnOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstSubtaskArgs.html" data-type="entity-link" >FindFirstSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstSubtaskOrThrowArgs.html" data-type="entity-link" >FindFirstSubtaskOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstTaskArgs.html" data-type="entity-link" >FindFirstTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstTaskOrThrowArgs.html" data-type="entity-link" >FindFirstTaskOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstWalletArgs.html" data-type="entity-link" >FindFirstWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindFirstWalletOrThrowArgs.html" data-type="entity-link" >FindFirstWalletOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyBoardArgs.html" data-type="entity-link" >FindManyBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyColumnArgs.html" data-type="entity-link" >FindManyColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManySubtaskArgs.html" data-type="entity-link" >FindManySubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyTaskArgs.html" data-type="entity-link" >FindManyTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindManyWalletArgs.html" data-type="entity-link" >FindManyWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueBoardArgs.html" data-type="entity-link" >FindUniqueBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueBoardOrThrowArgs.html" data-type="entity-link" >FindUniqueBoardOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueColumnArgs.html" data-type="entity-link" >FindUniqueColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueColumnOrThrowArgs.html" data-type="entity-link" >FindUniqueColumnOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueSubtaskArgs.html" data-type="entity-link" >FindUniqueSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueSubtaskOrThrowArgs.html" data-type="entity-link" >FindUniqueSubtaskOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueTaskArgs.html" data-type="entity-link" >FindUniqueTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueTaskOrThrowArgs.html" data-type="entity-link" >FindUniqueTaskOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueWalletArgs.html" data-type="entity-link" >FindUniqueWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindUniqueWalletOrThrowArgs.html" data-type="entity-link" >FindUniqueWalletOrThrowArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/IMutation.html" data-type="entity-link" >IMutation</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntFieldUpdateOperationsInput.html" data-type="entity-link" >IntFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntFilter.html" data-type="entity-link" >IntFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/IntWithAggregatesFilter.html" data-type="entity-link" >IntWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/IQuery.html" data-type="entity-link" >IQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedBoolFilter.html" data-type="entity-link" >NestedBoolFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedBoolWithAggregatesFilter.html" data-type="entity-link" >NestedBoolWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedDateTimeFilter.html" data-type="entity-link" >NestedDateTimeFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedDateTimeWithAggregatesFilter.html" data-type="entity-link" >NestedDateTimeWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedFloatFilter.html" data-type="entity-link" >NestedFloatFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedIntFilter.html" data-type="entity-link" >NestedIntFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedIntNullableFilter.html" data-type="entity-link" >NestedIntNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedIntWithAggregatesFilter.html" data-type="entity-link" >NestedIntWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringFilter.html" data-type="entity-link" >NestedStringFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringNullableFilter.html" data-type="entity-link" >NestedStringNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringNullableWithAggregatesFilter.html" data-type="entity-link" >NestedStringNullableWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedStringWithAggregatesFilter.html" data-type="entity-link" >NestedStringWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/NullableStringFieldUpdateOperationsInput.html" data-type="entity-link" >NullableStringFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderByParams.html" data-type="entity-link" >OrderByParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceStatus.html" data-type="entity-link" >ServiceStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortOrderInput.html" data-type="entity-link" >SortOrderInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFieldUpdateOperationsInput.html" data-type="entity-link" >StringFieldUpdateOperationsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringFilter.html" data-type="entity-link" >StringFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringNullableFilter.html" data-type="entity-link" >StringNullableFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringNullableWithAggregatesFilter.html" data-type="entity-link" >StringNullableWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/StringWithAggregatesFilter.html" data-type="entity-link" >StringWithAggregatesFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubTask.html" data-type="entity-link" >SubTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subtask.html" data-type="entity-link" >Subtask</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subtask-1.html" data-type="entity-link" >Subtask</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskAggregateArgs.html" data-type="entity-link" >SubtaskAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskAvgAggregate.html" data-type="entity-link" >SubtaskAvgAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskAvgAggregateInput.html" data-type="entity-link" >SubtaskAvgAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskAvgOrderByAggregateInput.html" data-type="entity-link" >SubtaskAvgOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCountAggregate.html" data-type="entity-link" >SubtaskCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCountAggregateInput.html" data-type="entity-link" >SubtaskCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCountOrderByAggregateInput.html" data-type="entity-link" >SubtaskCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateInput.html" data-type="entity-link" >SubtaskCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateManyInput.html" data-type="entity-link" >SubtaskCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateManyTaskInput.html" data-type="entity-link" >SubtaskCreateManyTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateManyTaskInputEnvelope.html" data-type="entity-link" >SubtaskCreateManyTaskInputEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateNestedManyWithoutTaskInput.html" data-type="entity-link" >SubtaskCreateNestedManyWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateOrConnectWithoutTaskInput.html" data-type="entity-link" >SubtaskCreateOrConnectWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskCreateWithoutTaskInput.html" data-type="entity-link" >SubtaskCreateWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskGroupBy.html" data-type="entity-link" >SubtaskGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskGroupByArgs.html" data-type="entity-link" >SubtaskGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskListRelationFilter.html" data-type="entity-link" >SubtaskListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMaxAggregate.html" data-type="entity-link" >SubtaskMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMaxAggregateInput.html" data-type="entity-link" >SubtaskMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMaxOrderByAggregateInput.html" data-type="entity-link" >SubtaskMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMinAggregate.html" data-type="entity-link" >SubtaskMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMinAggregateInput.html" data-type="entity-link" >SubtaskMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskMinOrderByAggregateInput.html" data-type="entity-link" >SubtaskMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskOrderByRelationAggregateInput.html" data-type="entity-link" >SubtaskOrderByRelationAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskOrderByWithAggregationInput.html" data-type="entity-link" >SubtaskOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskOrderByWithRelationInput.html" data-type="entity-link" >SubtaskOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskResolver.html" data-type="entity-link" >SubtaskResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskScalarWhereInput.html" data-type="entity-link" >SubtaskScalarWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskScalarWhereWithAggregatesInput.html" data-type="entity-link" >SubtaskScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskSumAggregate.html" data-type="entity-link" >SubtaskSumAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskSumAggregateInput.html" data-type="entity-link" >SubtaskSumAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskSumOrderByAggregateInput.html" data-type="entity-link" >SubtaskSumOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskTaskIdTitleCompoundUniqueInput.html" data-type="entity-link" >SubtaskTaskIdTitleCompoundUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedCreateInput.html" data-type="entity-link" >SubtaskUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedCreateNestedManyWithoutTaskInput.html" data-type="entity-link" >SubtaskUncheckedCreateNestedManyWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedCreateWithoutTaskInput.html" data-type="entity-link" >SubtaskUncheckedCreateWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedUpdateInput.html" data-type="entity-link" >SubtaskUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedUpdateManyInput.html" data-type="entity-link" >SubtaskUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedUpdateManyWithoutSubtaskInput.html" data-type="entity-link" >SubtaskUncheckedUpdateManyWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedUpdateManyWithoutTaskNestedInput.html" data-type="entity-link" >SubtaskUncheckedUpdateManyWithoutTaskNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUncheckedUpdateWithoutTaskInput.html" data-type="entity-link" >SubtaskUncheckedUpdateWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateInput.html" data-type="entity-link" >SubtaskUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateManyMutationInput.html" data-type="entity-link" >SubtaskUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateManyWithoutTaskNestedInput.html" data-type="entity-link" >SubtaskUpdateManyWithoutTaskNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateManyWithWhereWithoutTaskInput.html" data-type="entity-link" >SubtaskUpdateManyWithWhereWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateWithoutTaskInput.html" data-type="entity-link" >SubtaskUpdateWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpdateWithWhereUniqueWithoutTaskInput.html" data-type="entity-link" >SubtaskUpdateWithWhereUniqueWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskUpsertWithWhereUniqueWithoutTaskInput.html" data-type="entity-link" >SubtaskUpsertWithWhereUniqueWithoutTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskWhereInput.html" data-type="entity-link" >SubtaskWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubtaskWhereUniqueInput.html" data-type="entity-link" >SubtaskWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task-1.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task-2.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskAggregateArgs.html" data-type="entity-link" >TaskAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskAvgAggregate.html" data-type="entity-link" >TaskAvgAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskAvgAggregateInput.html" data-type="entity-link" >TaskAvgAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskAvgOrderByAggregateInput.html" data-type="entity-link" >TaskAvgOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskColumnIdTitleCompoundUniqueInput.html" data-type="entity-link" >TaskColumnIdTitleCompoundUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCount.html" data-type="entity-link" >TaskCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCountAggregate.html" data-type="entity-link" >TaskCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCountAggregateInput.html" data-type="entity-link" >TaskCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCountOrderByAggregateInput.html" data-type="entity-link" >TaskCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateInput.html" data-type="entity-link" >TaskCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateManyColumnInput.html" data-type="entity-link" >TaskCreateManyColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateManyColumnInputEnvelope.html" data-type="entity-link" >TaskCreateManyColumnInputEnvelope</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateManyInput.html" data-type="entity-link" >TaskCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateNestedManyWithoutColumnInput.html" data-type="entity-link" >TaskCreateNestedManyWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateNestedOneWithoutSubtaskInput.html" data-type="entity-link" >TaskCreateNestedOneWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateOrConnectWithoutColumnInput.html" data-type="entity-link" >TaskCreateOrConnectWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateOrConnectWithoutSubtaskInput.html" data-type="entity-link" >TaskCreateOrConnectWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateWithoutColumnInput.html" data-type="entity-link" >TaskCreateWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskCreateWithoutSubtaskInput.html" data-type="entity-link" >TaskCreateWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskGroupBy.html" data-type="entity-link" >TaskGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskGroupByArgs.html" data-type="entity-link" >TaskGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskListRelationFilter.html" data-type="entity-link" >TaskListRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMaxAggregate.html" data-type="entity-link" >TaskMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMaxAggregateInput.html" data-type="entity-link" >TaskMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMaxOrderByAggregateInput.html" data-type="entity-link" >TaskMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMinAggregate.html" data-type="entity-link" >TaskMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMinAggregateInput.html" data-type="entity-link" >TaskMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMinOrderByAggregateInput.html" data-type="entity-link" >TaskMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskOrderByRelationAggregateInput.html" data-type="entity-link" >TaskOrderByRelationAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskOrderByWithAggregationInput.html" data-type="entity-link" >TaskOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskOrderByWithRelationInput.html" data-type="entity-link" >TaskOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskRelationFilter.html" data-type="entity-link" >TaskRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskResolver.html" data-type="entity-link" >TaskResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskScalarWhereInput.html" data-type="entity-link" >TaskScalarWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskScalarWhereWithAggregatesInput.html" data-type="entity-link" >TaskScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskSumAggregate.html" data-type="entity-link" >TaskSumAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskSumAggregateInput.html" data-type="entity-link" >TaskSumAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskSumOrderByAggregateInput.html" data-type="entity-link" >TaskSumOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedCreateInput.html" data-type="entity-link" >TaskUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedCreateNestedManyWithoutColumnInput.html" data-type="entity-link" >TaskUncheckedCreateNestedManyWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedCreateWithoutColumnInput.html" data-type="entity-link" >TaskUncheckedCreateWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedCreateWithoutSubtaskInput.html" data-type="entity-link" >TaskUncheckedCreateWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateInput.html" data-type="entity-link" >TaskUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateManyInput.html" data-type="entity-link" >TaskUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateManyWithoutColumnNestedInput.html" data-type="entity-link" >TaskUncheckedUpdateManyWithoutColumnNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateManyWithoutTasksInput.html" data-type="entity-link" >TaskUncheckedUpdateManyWithoutTasksInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateWithoutColumnInput.html" data-type="entity-link" >TaskUncheckedUpdateWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUncheckedUpdateWithoutSubtaskInput.html" data-type="entity-link" >TaskUncheckedUpdateWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateInput.html" data-type="entity-link" >TaskUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateManyMutationInput.html" data-type="entity-link" >TaskUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateManyWithoutColumnNestedInput.html" data-type="entity-link" >TaskUpdateManyWithoutColumnNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateManyWithWhereWithoutColumnInput.html" data-type="entity-link" >TaskUpdateManyWithWhereWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateOneRequiredWithoutSubtaskNestedInput.html" data-type="entity-link" >TaskUpdateOneRequiredWithoutSubtaskNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateWithoutColumnInput.html" data-type="entity-link" >TaskUpdateWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateWithoutSubtaskInput.html" data-type="entity-link" >TaskUpdateWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpdateWithWhereUniqueWithoutColumnInput.html" data-type="entity-link" >TaskUpdateWithWhereUniqueWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpsertWithoutSubtaskInput.html" data-type="entity-link" >TaskUpsertWithoutSubtaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskUpsertWithWhereUniqueWithoutColumnInput.html" data-type="entity-link" >TaskUpsertWithWhereUniqueWithoutColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskWhereInput.html" data-type="entity-link" >TaskWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskWhereUniqueInput.html" data-type="entity-link" >TaskWhereUniqueInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBoardInput.html" data-type="entity-link" >UpdateBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBoardInput-1.html" data-type="entity-link" >UpdateBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColumnInput.html" data-type="entity-link" >UpdateColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateColumnInput-1.html" data-type="entity-link" >UpdateColumnInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyBoardArgs.html" data-type="entity-link" >UpdateManyBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyColumnArgs.html" data-type="entity-link" >UpdateManyColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManySubtaskArgs.html" data-type="entity-link" >UpdateManySubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyTaskArgs.html" data-type="entity-link" >UpdateManyTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateManyWalletArgs.html" data-type="entity-link" >UpdateManyWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneBoardArgs.html" data-type="entity-link" >UpdateOneBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneColumnArgs.html" data-type="entity-link" >UpdateOneColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneSubtaskArgs.html" data-type="entity-link" >UpdateOneSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneTaskArgs.html" data-type="entity-link" >UpdateOneTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateOneWalletArgs.html" data-type="entity-link" >UpdateOneWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubTaskInput.html" data-type="entity-link" >UpdateSubTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubTaskInput-1.html" data-type="entity-link" >UpdateSubTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskInput.html" data-type="entity-link" >UpdateTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskInput-1.html" data-type="entity-link" >UpdateTaskInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneBoardArgs.html" data-type="entity-link" >UpsertOneBoardArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneColumnArgs.html" data-type="entity-link" >UpsertOneColumnArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneSubtaskArgs.html" data-type="entity-link" >UpsertOneSubtaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneTaskArgs.html" data-type="entity-link" >UpsertOneTaskArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpsertOneWalletArgs.html" data-type="entity-link" >UpsertOneWalletArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Wallet.html" data-type="entity-link" >Wallet</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletAggregateArgs.html" data-type="entity-link" >WalletAggregateArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletAvgAggregate.html" data-type="entity-link" >WalletAvgAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletAvgAggregateInput.html" data-type="entity-link" >WalletAvgAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletAvgOrderByAggregateInput.html" data-type="entity-link" >WalletAvgOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCount.html" data-type="entity-link" >WalletCount</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCountAggregate.html" data-type="entity-link" >WalletCountAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCountAggregateInput.html" data-type="entity-link" >WalletCountAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCountOrderByAggregateInput.html" data-type="entity-link" >WalletCountOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateInput.html" data-type="entity-link" >WalletCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateManyInput.html" data-type="entity-link" >WalletCreateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateNestedOneWithoutBoardInput.html" data-type="entity-link" >WalletCreateNestedOneWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateOrConnectWithoutBoardInput.html" data-type="entity-link" >WalletCreateOrConnectWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletCreateWithoutBoardInput.html" data-type="entity-link" >WalletCreateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletGroupBy.html" data-type="entity-link" >WalletGroupBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletGroupByArgs.html" data-type="entity-link" >WalletGroupByArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMaxAggregate.html" data-type="entity-link" >WalletMaxAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMaxAggregateInput.html" data-type="entity-link" >WalletMaxAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMaxOrderByAggregateInput.html" data-type="entity-link" >WalletMaxOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMinAggregate.html" data-type="entity-link" >WalletMinAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMinAggregateInput.html" data-type="entity-link" >WalletMinAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletMinOrderByAggregateInput.html" data-type="entity-link" >WalletMinOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletOrderByWithAggregationInput.html" data-type="entity-link" >WalletOrderByWithAggregationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletOrderByWithRelationInput.html" data-type="entity-link" >WalletOrderByWithRelationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletRelationFilter.html" data-type="entity-link" >WalletRelationFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletScalarWhereWithAggregatesInput.html" data-type="entity-link" >WalletScalarWhereWithAggregatesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletSumAggregate.html" data-type="entity-link" >WalletSumAggregate</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletSumAggregateInput.html" data-type="entity-link" >WalletSumAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletSumOrderByAggregateInput.html" data-type="entity-link" >WalletSumOrderByAggregateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUncheckedCreateInput.html" data-type="entity-link" >WalletUncheckedCreateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUncheckedCreateWithoutBoardInput.html" data-type="entity-link" >WalletUncheckedCreateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUncheckedUpdateInput.html" data-type="entity-link" >WalletUncheckedUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUncheckedUpdateManyInput.html" data-type="entity-link" >WalletUncheckedUpdateManyInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUncheckedUpdateWithoutBoardInput.html" data-type="entity-link" >WalletUncheckedUpdateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUpdateInput.html" data-type="entity-link" >WalletUpdateInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUpdateManyMutationInput.html" data-type="entity-link" >WalletUpdateManyMutationInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUpdateOneRequiredWithoutBoardNestedInput.html" data-type="entity-link" >WalletUpdateOneRequiredWithoutBoardNestedInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUpdateWithoutBoardInput.html" data-type="entity-link" >WalletUpdateWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletUpsertWithoutBoardInput.html" data-type="entity-link" >WalletUpsertWithoutBoardInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletWhereInput.html" data-type="entity-link" >WalletWhereInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/WalletWhereUniqueInput.html" data-type="entity-link" >WalletWhereUniqueInput</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FilterBy.html" data-type="entity-link" >FilterBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterBy-1.html" data-type="entity-link" >FilterBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FilterBy-2.html" data-type="entity-link" >FilterBy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Flags.html" data-type="entity-link" >Flags</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});