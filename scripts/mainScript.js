let todasNoticias = [];
let noticiasFiltradas = [];
let index = 0;


const articles = [
    {
        "title": "Samsung vai apostar todas as suas fichas na IA",
        "link": "https://olhardigital.com.br/2025/03/18/pro/samsung-vai-apostar-todas-as-suas-fichas-na-ia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/12/shutterstock_2521120403.jpg",
        "category": "todas"
    },
    {
        "title": "Motorola Edge 60 Fusion: vazamento mostra quase todas specs do celular",
        "link": "https://www.tecmundo.com.br/celular/403568-motorola-edge-60-fusion-vazamento-mostra-quase-todas-specs-do-celular.htm",
        "image": "https://tm.ibxk.com.br/2025/03/25/25160127906002.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Finanças: já pode consultar todas as deduções ao IRS",
        "link": "https://pplware.sapo.pt/internet/financas-ja-pode-consultar-todas-as-deducoes-ao-irs-2/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2024/08/euros_00-1.jpg",
        "category": "todas"
    },
    {
        "title": "Como apagar todas as publicações do Facebook pelo celular ou PC",
        "link": "https://tecnoblog.net/responde/como-apagar-todas-as-publicacoes-do-facebook-pelo-celular-ou-pc/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/Como-apagar-todas-as-publicacoes-do-Facebook-pelo-celular-ou-PC-1536x864.png",
        "category": "todas"
    },
    {
        "title": "Ibiza: todas as dicas da badalada ilha espanhola",
        "link": "https://guia.melhoresdestinos.com.br/ibiza.html",
        "image": "https://imgmd.net/image/upload/c_limit%2Cw_1600/v1/guia/4172638.jpg",
        "category": "todas"
    },
    {
        "title": "Fim do Spotify Premium pirata? Bloqueadas subitamente todas as contas ilegais",
        "link": "https://pplware.sapo.pt/internet/seguranca/fim-do-spotify-premium-pirata-bloqueadas-subitamente-todas-as-contas-ilegais/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2020/12/spotify_seguranca_1.jpg",
        "category": "todas"
    },
    {
        "title": "Tesla recolhe quase todas as Cybertruck. Há peças a cair em andamento",
        "link": "https://pplware.sapo.pt/motores/tesla-recolhe-quase-todas-as-cybertruck-ha-pecas-a-cair-em-andamento/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/recall_cybertruck3.jpg",
        "category": "todas"
    },
    {
        "title": "Onda de calor: veja quando as temperaturas devem cair no Brasil",
        "link": "https://olhardigital.com.br/2025/03/03/ciencia-e-espaco/onda-de-calor-veja-quando-as-temperaturas-devem-cair-no-brasil/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/02/calor-1.png",
        "category": "todas"
    },
    {
        "title": "Como “O Aprendiz” revela uma aproximação da Amazon com Trump",
        "link": "https://olhardigital.com.br/2025/03/11/pro/como-o-aprendiz-revela-uma-aproximacao-da-amazon-com-trump/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/01/trump-no-palanque-1-e1738608404623.jpg",
        "category": "todas"
    },
    {
        "title": "Como assistir ao eclipse solar parcial pela internet?",
        "link": "https://olhardigital.com.br/2025/03/27/ciencia-e-espaco/como-assistir-ao-eclipse-solar-parcial-pela-internet/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/eclipse-solar-parcial-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "10 animes que o público nunca se cansa de reassistir no streaming",
        "link": "https://olhardigital.com.br/2025/03/16/cinema-e-streaming/10-animes-que-o-publico-nunca-se-cansa-de-reassistir-no-streaming/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/naruto-cavaleiros-e-yugioh-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "Musk: “Se eu desativasse a Starlink, o exército ucraniano entraria em colapso”",
        "link": "https://olhardigital.com.br/2025/03/09/pro/musk-se-eu-desativasse-a-starlink-o-exercito-ucraniano-entraria-em-colapso/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/starlink_musk.jpg",
        "category": "todas"
    },
    {
        "title": "China decide: todo conteúdo gerado por IA terá rótulo especial",
        "link": "https://tecnoblog.net/noticias/china-decide-todo-conteudo-gerado-por-ia-tera-rotulo-especial/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2023/06/ia-2.png",
        "category": "todas"
    },
    {
        "title": "Estrasburgo – todas as dicas para curtir uma das cidades mais charmosas da Europa!",
        "link": "https://guia.melhoresdestinos.com.br/blog/estrasburgo.html",
        "image": "https://imgmd.net/images/c_limit%2Cw_1600/v1/guia/4266994/estrasburgo.jpg",
        "category": "todas"
    },
    {
        "title": "O ingrediente secreto dos grandes sucessos",
        "link": "https://www.b9.com.br/171566/o-ingrediente-secreto-dos-grandes-sucessos/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/emesad.jpg",
        "category": "todas"
    },
    {
        "title": "Como se tornar o gestor que as pessoas querem seguir?",
        "link": "https://www.b9.com.br/171343/como-se-tornar-o-gestor-que-as-pessoas-querem-seguir/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/gestao.jpg",
        "category": "todas"
    },
    {
        "title": "O que é o sol da meia-noite e em que lugares do planeta ele acontece?",
        "link": "https://olhardigital.com.br/2025/03/25/ciencia-e-espaco/o-que-e-o-sol-da-meia-noite-e-em-que-lugares-do-planeta-ele-acontece/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/sol-da-meia-noite.png",
        "category": "todas"
    },
    {
        "title": "IRPF: quem deve declarar Imposto de Renda em 2025?",
        "link": "https://olhardigital.com.br/2025/03/05/pro/irpf-quem-deve-declarar-imposto-de-renda-em-2025/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/2-Capa-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "Bomba da 2ª Guerra Mundial é encontrada em estação de trem de Paris",
        "link": "https://olhardigital.com.br/2025/03/07/pro/bomba-da-2a-guerra-mundial-e-encontrada-em-estacao-de-trem-de-paris/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/trens-1.jpg",
        "category": "todas"
    },
    {
        "title": "Como ‘parentes’ dos anfíbios sobreviveram à maior extinção do planeta",
        "link": "https://olhardigital.com.br/2025/03/13/ciencia-e-espaco/como-parentes-dos-anfibios-sobreviveram-a-maior-extincao-do-planeta/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/temnospondyli-1.jpg",
        "category": "todas"
    },
    {
        "title": "Hoje é o dia do Pi! Entenda a ‘magia’ desse famoso número",
        "link": "https://olhardigital.com.br/2025/03/14/ciencia-e-espaco/hoje-e-o-dia-do-pi-entenda-a-magia-desse-famoso-numero/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/dia-do-Pi-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "Como a proposta de isenção do Imposto de Renda repercutiu nas redes",
        "link": "https://veja.abril.com.br/coluna/radar/como-a-proposta-de-isencao-do-imposto-de-renda-repercutiu-nas-redes",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/54395496990_f79446b2b5_c.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "SPFW 30 anos: “A moda brasileira tem 200 milhões de caras e queremos todas representadas”, diz Paulo Borges",
        "link": "https://veja.abril.com.br/comportamento/a-moda-brasileira-tem-200-milhoes-de-caras-e-queremos-todas-representadas-diz-paulo-borges",
        "image": "https://veja.abril.com.br/wp-content/uploads/2024/10/tC6B-08Q.jpeg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "A Netflix não tem medo de perder subscritores! Eles acabam por voltar e depressa",
        "link": "https://pplware.sapo.pt/internet/a-netflix-nao-tem-medo-de-perder-subscritores-eles-acabam-por-voltar-e-depressa/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2024/10/netflix_moments_1.jpg",
        "category": "todas"
    },
    {
        "title": "Com a criptomoeda em queda, empresário avisa: “venda um rim, mas mantenha a Bitcoin”",
        "link": "https://pplware.sapo.pt/criptomoeda/com-a-criptomoeda-em-queda-empresario-avisa-venda-um-rim-mas-mantenha-a-bitcoin/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/bitcoin_criptomoeda-1.jpg",
        "category": "todas"
    },
    {
        "title": "Spotify inova e traz música ao vivo e concertos para os seus utilizadores",
        "link": "https://pplware.sapo.pt/multimedia-2/musica/spotify-inova-e-traz-musica-ao-vivo-e-concertos-para-os-seus-utilizadores/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/spotify_concertos_proximos_1.jpg",
        "category": "todas"
    },
    {
        "title": "Platinum Notes: normaliza e melhora a qualidade das suas músicas de DJ",
        "link": "https://pplware.sapo.pt/software/platinum-notes-normalizacao-musica-dj/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/Platinum-Notes-normaliza-e-melhora-a-qualidade-das-suas-musicas-de-DJ.jpg",
        "category": "todas"
    },
    {
        "title": "Balance Board: tenha um ginásio em casa! Use o smartphone",
        "link": "https://pplware.sapo.pt/zzpublicidade/balance-board-tenha-um-ginasio-em-casa-use-o-smartphone/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2024/03/board-00-1.jpg",
        "category": "todas"
    },
    {
        "title": "Google Drive chega finalmente aos PCs Windows com SoC ARM",
        "link": "https://pplware.sapo.pt/microsoft/windows/google-drive-chega-finalmente-aos-pcs-windows-com-soc-arm/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2023/05/google_drive_spam_1.jpg",
        "category": "todas"
    },
    {
        "title": "Waze desiste do Google Assistant no iPhone! Em breve haverá uma solução melhor",
        "link": "https://pplware.sapo.pt/apple/waze-desiste-do-google-assistant-no-iphone-em-breve-havera-uma-solucao-melhor/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/waze_ios_1.jpg",
        "category": "todas"
    },
    {
        "title": "Anistia ao 8 de janeiro: o que diz o projeto de lei e como pode beneficiar Bolsonaro",
        "link": "https://www.bbc.com/portuguese/articles/cwye9ggvng5o",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/189f/live/19de7bb0-0247-11f0-aa2a-2983ed0d6e65.jpg",
        "category": "todas"
    },
    {
        "title": "Um guia para lidar com suas emoções em vez de deixar que elas te controlem",
        "link": "https://www.bbc.com/portuguese/articles/clyzl1ylg22o",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/13ab/live/a2145bb0-f939-11ef-8c03-7dfdbeeb2526.jpg",
        "category": "todas"
    },
    {
        "title": "'Epicentro do terrorismo global': a região que concentra mais da metade das mortes pelo terror no mundo",
        "link": "https://www.bbc.com/portuguese/articles/cx2x0jj21djo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/507d/live/ed4a5c50-f471-11ef-aeb3-bb556fdec0fe.jpg",
        "category": "todas"
    },
    {
        "title": "TecMundo tem página especial com cupons de desconto das principais lojas da internet; acesse",
        "link": "https://www.tecmundo.com.br/mercado/403464-tecmundo-tem-pagina-especial-com-cupons-de-desconto-das-principais-lojas-da-internet-acesse.htm",
        "image": "https://tm.ibxk.com.br/2025/03/20/20163623733041.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Os 7 piores filmes e séries True Crime já produzidos",
        "link": "https://www.tecmundo.com.br/minha-serie/600902-os-7-piores-filmes-e-series-true-crime-ja-produzidos.htm",
        "image": "https://tm.ibxk.com.br/2025/03/12/12152320781306.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "WhatsApp vai ganhar novidade importante para organizar mensagens",
        "link": "https://www.tecmundo.com.br/software/403286-whatsapp-vai-ganhar-novidade-importante-para-organizar-mensagens.htm",
        "image": "https://tm.ibxk.com.br/2025/03/13/13105110301142.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Hidrate-se no alto Verão: 8 opções de Garrafa Stanley com capacidade acima de 700 mL",
        "link": "https://www.tecmundo.com.br/produto/403069-hidrate-se-no-alto-verao-8-opcoes-de-garrafa-stanley-com-capacidade-acima-de-700-ml.htm",
        "image": "https://tm.ibxk.com.br/2025/02/28/28120113536298.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Ingresso Pão de Açúcar: onde comprar, quanto custa e dicas para a visita",
        "link": "https://www.melhoresdestinos.com.br/ingresso-pao-de-acucar.html",
        "image": "https://www.melhoresdestinos.com.br/wp-content/uploads/2025/03/ingresso-bondinho-pao-acucar-capa.jpeg",
        "category": "todas"
    },
    {
        "title": "Por que nudez masculina ainda é rara e um tabu na TV e no cinema",
        "link": "https://www.bbc.com/portuguese/articles/c757gyd1ngdo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/b70f/live/36a61400-072a-11f0-88b7-5556e7b55c5e.jpg",
        "category": "todas"
    },
    {
        "title": "Redmagic faz sorteio global de smartphone gamer muito potente; saiba como participar",
        "link": "https://www.tecmundo.com.br/celular/403081-redmagic-faz-sorteio-global-de-smartphone-gamer-muito-potente-saiba-como-participar.htm",
        "image": "https://tm.ibxk.com.br/2025/02/28/28154645308049.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Vivo encerra SMS e ligações ilimitadas em planos; entenda o que muda",
        "link": "https://olhardigital.com.br/2025/03/27/pro/o-que-muda-apos-vivo-encerrar-sms-e-ligacoes-ilimitadas-em-planos/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/Destaque-Operadora-Vivo-27-de-marco-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "Artemis II no SXSW 2025: lições da Lua para a Terra",
        "link": "https://www.b9.com.br/171364/artemis-ii-no-sxsw-2025-licoes-da-lua-para-a-terra/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/orion.jpg",
        "category": "todas"
    },
    {
        "title": "Identificadas todas as vítimas de incêndio na Macedónia do Norte",
        "link": "https://observador.pt/2025/03/18/identificadas-todas-as-vitimas-de-incendio-na-macedonia-do-norte/",
        "image": "https://wm.observador.pt/wm/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1122%3Anowe%3A0%3A3%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2025%2F03%2F18164946%2F44608282.jpg?layer=obstop:T",
        "category": "todas"
    },
    {
        "title": "WhatsApp vai organizar mensagens em fios de conversa",
        "link": "https://tecnoblog.net/noticias/whatsapp-vai-organizar-mensagens-em-fios-de-conversa/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2022/11/whatsapp-capa-4-nov-2022-1536x864.png",
        "category": "todas"
    },
    {
        "title": "Disney+ terá estreias de peso em março! Confira todos os lançamentos",
        "link": "https://www.tecmundo.com.br/minha-serie/600862-disney-tera-estreias-de-peso-em-marco-confira-todos-os-lancamentos.htm",
        "image": "https://tm.ibxk.com.br/2025/03/05/05133746139009.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Black Mirror: confira o trailer, a data de estreia e o que esperar da Temporada 7",
        "link": "https://www.tecmundo.com.br/minha-serie/600913-black-mirror-confira-o-trailer-a-data-de-estreia-e-o-que-esperar-da-temporada-7.htm",
        "image": "https://tm.ibxk.com.br/2025/03/13/13165128653443.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Jogos em mídia física estão ameaçados e podem ficar mais caros? Entenda situação no Brasil",
        "link": "https://www.tecmundo.com.br/voxel/500913-jogos-em-midia-fisica-estao-ameacados-e-podem-ficar-mais-caros-entenda-situacao-no-brasil.htm",
        "image": "https://tm.ibxk.com.br/2025/03/10/10094211789020.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "Disney+ lança novo plano padrão com anúncios no Brasil por preço promocional; confira valores",
        "link": "https://www.tecmundo.com.br/minha-serie/600880-disney-lanca-novo-plano-padrao-com-anuncios-no-brasil-por-preco-promocional-confira-valores.htm",
        "image": "https://tm.ibxk.com.br/2025/03/07/07152250838089.jpg?ims=1200xorig",
        "category": "todas"
    },
    {
        "title": "WhatsApp Business ganha novo ícone em atualização; confira",
        "link": "https://www.tecmundo.com.br/software/403479-whatsapp-business-ganha-novo-icone-em-atualizacao-confira.htm?ab=true&",
        "image": "https://tm.ibxk.com.br/2025/03/21/21101055569008.jpg?ims=1280x605",
        "category": "todas"
    },
    {
        "title": "Quando é o Carnaval de 2026? Fique por dentro de todas as datas!",
        "link": "https://www.terra.com.br/diversao/carnaval/quando-e-o-carnaval-de-2026-fique-por-dentro-de-todas-as-datas,6604cffdcf6e3c76ec7990affbdeb6ee818pl2ly.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/02/28/1013671348-carnaval-imagem-reuters-connect-amanda-perobelli-326x245.png",
        "category": "todas"
    },
    {
        "title": "Calendário Bolsa Família 2025: veja todas as datas de pagamento em março",
        "link": "https://www.terra.com.br/economia/calendario-bolsa-familia-2025-veja-todas-as-datas-de-pagamento-em-marco,7bd80e7345debf4c7c225a5c2ce763fbn3yxkeas.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "todas"
    },
    {
        "title": "Gerson é eleito craque do Cariocão 2025; confira todas as premiações do Estadual",
        "link": "https://www.terra.com.br/esportes/flamengo/gerson-e-eleito-craque-do-cariocao-2025-confira-todas-as-premiacoes-do-estadual,21940aad7f31e64c8ff3dae199e4c46e3s8epik5.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/28/2102233279-gerson-melhor-capitao-selecao-melhores-do-campeonato-carioca-cariocao-2025-01easy-resizecom-610x400.jpg",
        "category": "todas"
    },
    {
        "title": "Como consultar informe de rendimentos do Nubank",
        "link": "https://olhardigital.com.br/2025/03/14/dicas-e-tutoriais/como-consultar-informe-de-rendimentos-do-nubank/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Informe-de-rendimentos-Nubank.png",
        "category": "todas"
    },
    {
        "title": "Citroën C3 fica mais caro em todas as versões em março; confira nova tabela",
        "link": "https://www.terra.com.br/mobilidade/carros/citroen-c3-fica-mais-caro-em-todas-as-versoes-em-marco-confira-nova-tabela,c2d2672fe6c6f45a41c825cc4bb31b750k8zeiro.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/08/26/novo-citroen-c3-you!-(1)-qxfj2ginfbcj.jpg",
        "category": "todas"
    },
    {
        "title": "Edinho Silva tem 'todas as qualidades' para ser presidente do PT, diz Gleisi",
        "link": "https://www.terra.com.br/noticias/brasil/politica/edinho-silva-tem-todas-as-qualidades-para-ser-presidente-do-pt-diz-gleisi,ec6b1a02ae358c24a0fd4ee75554f53dos9k2s2w.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "todas"
    },
    {
        "title": "Eureka! Descobrimos um ‘novo’ sistema imunológico no corpo humano",
        "link": "https://olhardigital.com.br/2025/03/08/medicina-e-saude/eureka-descobrimos-um-novo-sistema-imunologico-no-corpo-humano/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/08/sistema-imunologico-1-1024x1024.png",
        "category": "todas"
    },
    {
        "title": "Vale milhões! Boneco original do filme ‘E.T’ vai a leilão",
        "link": "https://olhardigital.com.br/2025/03/27/cinema-e-streaming/boneco-original-do-filme-e-t-vai-a-leilao/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/Destaque-Filme-E.T-Extraterrestre-scaled.jpg",
        "category": "todas"
    },
    {
        "title": "BBB 25: Entre duplas e indivíduos, relembre todas as eliminações em dois meses de programa",
        "link": "https://www.terra.com.br/diversao/tv/reality-shows/bbb-25-entre-duplas-e-individuos-relembre-todas-as-eliminacoes-em-dois-meses-de-programa,9bb7d4c5188b146001c2aa645900017255oneiak.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "todas"
    },
    {
        "title": "Rede Globo promove evento com todas as frentes do futebol brasileiro",
        "link": "https://www.terra.com.br/esportes/atletico-mg/rede-globo-promove-evento-com-todas-as-frentes-do-futebol-brasileiro,9b25103cd24cd6247d532b8a20354994ydjdgi07.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/20/567397806-screenshot3easy-resizecom-610x400.jpg",
        "category": "todas"
    },
    {
        "title": "Campeonatos estaduais 2025: horários e onde assistir a todas as decisões pelo Brasil",
        "link": "https://veja.abril.com.br/esporte/campeonatos-estaduais-2025-horarios-e-situacoes-de-todas-as-decisoes-pelo-brasil",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/GettyImages-2198431491.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "Novo estudo revela as vinte cidades mais poluídas no mundo",
        "link": "https://veja.abril.com.br/mundo/novo-estudo-revela-as-vinte-cidades-mais-poluidas-no-mundo",
        "image": "https://veja.abril.com.br/wp-content/uploads/2024/10/AdobeStock_488492584.jpeg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "Verão o ano todo: saiba como proteger sua pele do sol em todas as estações",
        "link": "https://veja.abril.com.br/coluna/bem-estar/verao-o-ano-todo-saiba-como-proteger-sua-pele-do-sol-em-todas-as-estacoes",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/02/GettyImages-1211404961.jpg.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "Saque-aniversário: tire todas as dúvidas sobre a liberação do saldo retido do FGTS",
        "link": "https://veja.abril.com.br/economia/saque-aniversario-tire-todas-as-duvidas-sobre-a-liberacao-do-saldo-retido-do-fgts",
        "image": "https://veja.abril.com.br/wp-content/uploads/2023/09/000_MJ7XD.jpg.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "todas"
    },
    {
        "title": "Quantas horas para terminar Monster Hunter Wilds?",
        "link": "https://olhardigital.com.br/2025/03/30/games-e-consoles/quantas-horas-para-terminar-monster-hunter-wilds/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/imagem_2025-03-27_113451401.png",
        "category": "todas"
    },
    {
        "title": "Galaxy A56, A36 e A26: qual o melhor celular Samsung para você?",
        "link": "https://olhardigital.com.br/2025/03/16/reviews/galaxy-a56-a36-e-a26-qual-o-melhor-celular-samsung-para-voce/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-25.png",
        "category": "todas"
    },
    {
        "title": "Quantas horas para terminar Like a Dragon: Pirate Yakuza in Hawaii?",
        "link": "https://olhardigital.com.br/2025/03/30/games-e-consoles/quantas-horas-para-terminar-like-a-dragon-pirate-yakuza-in-hawaii/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/imagem_2025-03-27_114750457.png",
        "category": "todas"
    },
    {
        "title": "netstat: saiba como quem a sua máquina está a “comunicar”…",
        "link": "https://pplware.sapo.pt/linux/netstat-saiba-como-quem-a-sua-maquina-esta-a-comunicar/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2016/01/router_06_thumb.jpg",
        "category": "todas"
    },
    {
        "title": "netstat: saiba com quem a sua máquina está a “comunicar”…",
        "link": "https://pplware.sapo.pt/linux/netstat-saiba-com-quem-a-sua-maquina-esta-a-comunicar/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2016/01/router_06_thumb.jpg",
        "category": "todas"
    },
    {
        "title": "MotoGp: Marc Márquez vence na Tailândia",
        "link": "https://www.terra.com.br/parceiros/parabolica/motogp-marc-marquez-vence-na-tailandia,97ce880b58a58501f05a6bdc99dd9a799tosyew6.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/02/588424ea-2d5a-4bfe-b9b7-4f03d1b64d67-1h7j4yvlyqkon.jpeg",
        "category": "todas"
    },
    {
        "title": "Tarifas de Trump sobre metais entram em vigor com em meio a iminência de guerra comercial global",
        "link": "https://www.terra.com.br/economia/tarifas-de-trump-sobre-metais-entram-em-vigor-com-em-meio-a-iminencia-de-guerra-comercial-global,5d392bcf0637e448bd0ae3cc57fd59b5s96340df.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "todas"
    },
    {
        "title": "Tarifas de Trump sobre metais provocam retaliação rápida do Canadá e da UE",
        "link": "https://www.terra.com.br/noticias/mundo/tarifas-de-trump-sobre-metais-provocam-retaliacao-rapida-do-canada-e-da-ue,3d4a1f2c8a4714a85739b1c90cb83af5vdkcvy9b.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "todas"
    },
    {
        "title": "Lula diz que não tem problema de ligar para Trump para discutir tarifa",
        "link": "https://www.bbc.com/portuguese/articles/cvgeg1egm3vo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/cc17/live/efbd92f0-0c9e-11f0-ab49-f3f2440ca034.jpg",
        "category": "todas"
    },
    {
        "title": "Instabilidade do X: Elon Musk diz que rede foi alvo de 'ciberataque massivo'",
        "link": "https://www.tecmundo.com.br/internet/403211-instabilidade-do-x-elon-musk-diz-que-rede-foi-alvo-de-ciberataque-massivo.htm",
        "image": "https://tm.ibxk.com.br/2025/02/28/28111435105275.jpg?ims=1200xorig",
        "category": "todas"
    },

    {
        "title": "Cell Broadcast: como funciona a tecnologia de alerta em celulares da Defesa Civil?",
        "link": "https://www.tecmundo.com.br/software/403302-cell-broadcast-como-funciona-a-tecnologia-de-alerta-em-celulares-da-defesa-civil.htm",
        "image": "https://tm.ibxk.com.br/2025/03/13/13094819668039.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Como a IA pode ajudar árbitros de futebol a tomar decisões melhores",
        "link": "https://olhardigital.com.br/2025/03/18/pro/como-a-ia-pode-ajudar-arbitros-de-futebol-a-tomar-decisoes-melhores/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/arbitros.jpg",
        "category": "tecnologia"
    },
    {
        "title": "5 aplicativos que podem ajudar na segurança de mulheres",
        "link": "https://olhardigital.com.br/2025/03/24/dicas-e-tutoriais/5-aplicativos-que-podem-ajudar-na-seguranca-de-mulheres/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/irmandade-sororidade-mulheres.png",
        "category": "tecnologia"
    },
    {
        "title": "Ansiedade e tecnologia: 6 dicas para usar eletrônicos e se sentir mais calmo",
        "link": "https://olhardigital.com.br/2025/03/06/dicas-e-tutoriais/ansiedade-e-tecnologia-6-dicas-para-usar-eletronicos-e-se-sentir-mais-calmo/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/Ansiedade-digital-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Home office: 64 vagas para trabalho remoto internacional [14/03]",
        "link": "https://www.tecmundo.com.br/mercado/403325-home-office-64-vagas-para-trabalho-remoto-internacional-1403.htm",
        "image": "https://tm.ibxk.com.br/2025/03/14/14121056009240.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "BYD: nova bateria para carros elétricos carrega um veículo em 5 minutos",
        "link": "https://www.tecmundo.com.br/transportes/403384-byd-nova-bateria-para-carros-eletricos-carrega-um-veiculo-em-5-minutos.htm",
        "image": "https://tm.ibxk.com.br/2025/03/18/18101056799015.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Como IA e tecnologia estão transformando a saúde na Amazônia",
        "link": "https://www.b9.com.br/171512/como-ia-e-tecnologia-estao-transformando-a-saude-na-amazonia/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/amazoni.jpg",
        "category": "tecnologia"
    },
    {
        "title": "OpenAI e Google pressionam por acesso a dados protegidos para treinar IA",
        "link": "https://olhardigital.com.br/2025/03/17/pro/openai-e-google-pressionam-por-acesso-a-dados-protegidos-para-treinar-ia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/ChatGPT-Vs-Google-1-scaled-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Guerra tech: governo Trump impõe novas restrições à China",
        "link": "https://olhardigital.com.br/2025/03/26/pro/guerra-tech-governo-trump-impoe-novas-restricoes-a-china/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/china-usa.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Novo game F1 25 usa tecnologia que está em carros de verdade",
        "link": "https://olhardigital.com.br/2025/03/28/games-e-consoles/novo-game-f1-25-usa-tecnologia-que-esta-em-carros-de-verdade/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-27-131304.jpg",
        "category": "tecnologia"
    },
    {
        "title": "10 notícias de tecnologia para você começar o dia (20/03)",
        "link": "https://www.tecmundo.com.br/mercado/403438-10-noticias-de-tecnologia-para-voce-comecar-o-dia-2003.htm",
        "image": "https://tm.ibxk.com.br/2025/03/19/19113905328167.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Provedor Taara se separa do Google e vira empresa independente",
        "link": "https://tecnoblog.net/noticias/provedor-taara-se-separa-do-google-e-vira-empresa-independente/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/terminal-taara.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Grok 3: IA de Elon Musk desafia limites éticos da tecnologia",
        "link": "https://olhardigital.com.br/2025/03/26/pro/grok-3-ia-de-elon-musk-desafia-limites-eticos-da-tecnologia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/shutterstock_2587639919.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Smartwatch que salva vidas? IA do Google detecta parada cardíaca com alta precisão",
        "link": "https://olhardigital.com.br/2025/03/02/medicina-e-saude/smartwatch-que-salva-vidas-ia-do-google-detecta-parada-cardiaca-com-alta-precisao/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/smartwatch.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Exclusivo: Motorola recebe críticas e muda forma de comunicar RAM Boost no Brasil",
        "link": "https://tecnoblog.net/noticias/exclusivo-motorola-recebe-criticas-e-muda-forma-de-comunicar-ram-boost-no-brasil/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/20250305_105805-1536x865.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Bluesky vai permitir que usuários escolham se IAs podem acessar suas publicações",
        "link": "https://tecnoblog.net/noticias/bluesky-vai-permitir-que-usuarios-escolham-se-ias-podem-acessar-suas-publicacoes/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2024/12/capa-bluesky-3_tb-1536x864.png",
        "category": "tecnologia"
    },
    {
        "title": "Fãs de tecnologia, este filme é imperdível!",
        "link": "https://pplware.sapo.pt/multimedia-2/cinema/fas-de-tecnologia-este-filme-e-imperdivel-2/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/mitchells_vs_machines_netflix.jpg",
        "category": "tecnologia"
    },
    {
        "title": "SXSW: “Humanidade” como motor de inovação",
        "link": "https://www.b9.com.br/171645/sxsw-humanidade-como-motor-de-inovacao/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/human.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Estação de trem no Japão será construída em 6 horas com impressão 3D",
        "link": "https://olhardigital.com.br/2025/03/17/pro/estacao-de-trem-no-japao-sera-construida-em-6-horas-com-impressao-3d/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/3d-station.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Conheça dez habilidades digitais que os brasileiros ainda não dominam",
        "link": "https://olhardigital.com.br/2025/03/16/ciencia-e-espaco/conheca-dez-habilidades-digitais-que-os-brasileiros-ainda-nao-dominam/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/digital-skills.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Tecnologia + inteligência humana: a fusão que define o futuro dos negócios",
        "link": "https://olhardigital.com.br/2025/03/22/colunistas/tecnologia-inteligencia-humana-a-fusao-que-define-o-futuro-dos-negocios/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-22.jpg",
        "category": "tecnologia"
    },
    {
        "title": "McDonald's e IA: saiba como a tecnologia vai aprimorar a experiência de clientes e funcionários",
        "link": "https://www.tecmundo.com.br/mercado/403173-mcdonalds-e-ia-saiba-como-a-tecnologia-vai-aprimorar-a-experiencia-de-clientes-e-funcionarios.htm",
        "image": "https://tm.ibxk.com.br/2025/03/07/07104247916175.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Fãs de tecnologia, este documentário é imperdível!",
        "link": "https://pplware.sapo.pt/multimedia-2/cinema/fas-de-tecnologia-este-documentario-e-imperdivel-7/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/warren_buffett.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Tecnologia permite ouvir música sem fone e sem incomodar ninguém ao lado",
        "link": "https://olhardigital.com.br/2025/03/20/olha-isso/tecnologia-permite-ouvir-musica-sem-fone-e-sem-incomodar-ninguem-ao-lado/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-19-102046.png",
        "category": "tecnologia"
    },
    {
        "title": "Super Bowl da IA? Evento badalado da Nvidia promete revelar futuro da tecnologia",
        "link": "https://olhardigital.com.br/2025/03/18/pro/super-bowl-da-ia-evento-badalado-da-nvidia-promete-revelar-futuro-da-tecnologia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/01/fachada_nvidia.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Especialistas temem o aumento da tecnologia de IA para fins militares",
        "link": "https://olhardigital.com.br/2025/03/14/pro/especialistas-temem-o-aumento-da-tecnologia-de-ia-para-fins-militares/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/ia-militares.jpg",
        "category": "tecnologia"
    },
    {
        "title": "China bane obrigatoriedade de reconhecimento facial",
        "link": "https://tecnoblog.net/noticias/china-bane-obrigatoriedade-de-reconhecimento-facial/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2023/01/seguranca-capa-5-1536x864.png",
        "category": "tecnologia"
    },
    {
        "title": "Temos mais empatia e confiança com IA do que com outras pessoas, diz especialista",
        "link": "https://olhardigital.com.br/2025/03/10/pro/temos-mais-empatia-e-confianca-com-ia-do-que-com-outras-pessoas-diz-especialista/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/Story-IA-chatbot.jpg",
        "category": "tecnologia"
    },
    {
        "title": "10 notícias de tecnologia para você começar o dia (27/03)",
        "link": "https://www.tecmundo.com.br/mercado/403601-10-noticias-de-tecnologia-para-voce-comecar-o-dia-2703.htm?ab=true&",
        "image": "https://tm.ibxk.com.br/2025/03/26/26165659188075.jpg?ims=1280x605",
        "category": "tecnologia"
    },
    {
        "title": "Diretores de “Vingadores” querem criar estúdio que use IA ‘para o bem’",
        "link": "https://olhardigital.com.br/2025/03/18/cinema-e-streaming/diretores-de-vingadores-querem-criar-estudio-que-use-ia-para-o-bem/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/russo-irmos.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Análise Huawei FreeClip: os auriculares mais confortáveis com tecnologia open-ear",
        "link": "https://pplware.sapo.pt/gadgets/analise-huawei-freeclip-os-auriculares-mais-confortaveis-com-tecnologia-open-ear/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/huawei_freeclip_capa.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Enclaves audíveis: tecnologia transmite sons que apenas pessoas específicas podem ouvir",
        "link": "https://www.tecmundo.com.br/ciencia/403560-enclaves-audiveis-tecnologia-transmite-sons-que-apenas-pessoas-especificas-podem-ouvir.htm",
        "image": "https://tm.ibxk.com.br/2025/03/25/25131121270004.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Janelas do futuro: tecnologia de smartphones protege e ajuda na conta de luz",
        "link": "https://olhardigital.com.br/2025/03/22/ciencia-e-espaco/janelas-do-futuro-tecnologia-de-smartphones-protege-e-ajuda-na-conta-de-luz/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/vidro_redimensionado_escalado-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Como “O Aprendiz” revela uma aproximação da Amazon com Trump",
        "link": "https://olhardigital.com.br/2025/03/11/pro/como-o-aprendiz-revela-uma-aproximacao-da-amazon-com-trump/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/01/trump-no-palanque-1-e1738608404623.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Nova tecnologia chinesa pode deixar os caças ‘invisíveis’",
        "link": "https://olhardigital.com.br/2025/03/09/carros-e-tecnologia/nova-tecnologia-chinesa-pode-deixar-os-cacas-invisiveis/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/caa-china-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "AML: conheça a tecnologia que a PM de SP usa para rastrear vítimas com chamadas de emergência",
        "link": "https://www.tecmundo.com.br/seguranca/403461-aml-conheca-a-tecnologia-que-a-pm-de-sp-usa-para-rastrear-vitimas-com-chamadas-de-emergencia.htm",
        "image": "https://tm.ibxk.com.br/2025/03/20/20152250315015.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Fim das deepfakes? Meta amplia reconhecimento facial de celebridades para evitar golpes",
        "link": "https://olhardigital.com.br/2025/03/05/seguranca/fim-das-deepfakes-meta-amplia-reconhecimento-facial-de-celebridades-para-evitar-golpes/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/shutterstock_1897633003-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Sphere: tecnologia de Las Vegas pode se espalhar pelo mundo",
        "link": "https://olhardigital.com.br/2025/03/11/pro/sphere-tecnologia-de-las-vegas-pode-se-espalhar-pelo-mundo/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-11-153736.png",
        "category": "tecnologia"
    },
    {
        "title": "Google lança o Gemma 3, modelo de IA que supera todos os rivais",
        "link": "https://olhardigital.com.br/2025/03/12/pro/google-lanca-o-gemma-3-modelo-de-ia-que-supera-todos-os-rivais/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/08/gemma.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Sony quer usar FSR 4 no PS5 Pro em 2026! Entenda os benefícios da parceira com a AMD",
        "link": "https://www.tecmundo.com.br/voxel/500928-sony-quer-usar-fsr-4-no-ps5-pro-em-2026-entenda-os-beneficios-da-parceira-com-a-amd.htm",
        "image": "https://tm.ibxk.com.br/2024/11/27/27090923077000.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Microsoft alerta sobre ataque de hackers chineses para espionagem",
        "link": "https://olhardigital.com.br/2025/03/05/seguranca/microsoft-alerta-sobre-ataque-de-hackers-chineses-para-espionagem/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/09/china-hacker.jpg",
        "category": "tecnologia"
    },
    {
        "title": "BYD lança carro de luxo com ‘a melhor suspensão do mundo’; veja!",
        "link": "https://olhardigital.com.br/2025/03/31/carros-e-tecnologia/byd-lanca-carro-de-luxo-com-a-melhor-suspensao-do-mundo-veja/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/byd-yangwang-u7-with-disus-z-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Data centers crescem em São Paulo durante a corrida das IAs",
        "link": "https://olhardigital.com.br/2025/03/30/noticias/data-centers-crescem-em-sao-paulo-durante-a-corrida-das-ias/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Data-Center.jpg",
        "category": "tecnologia"
    },
    {
        "title": "O impacto do K-Content e a tecnologia no futuro do entretenimento",
        "link": "https://www.b9.com.br/171490/o-impacto-do-k-content-e-a-tecnologia-no-futuro-do-entretenimento/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/kpop.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Atendimento ao cliente em 2025: como tecnologia e empatia redefinem o jogo",
        "link": "https://olhardigital.com.br/2025/03/03/colunistas/atendimento-ao-cliente-em-2025-como-tecnologia-e-empatia-redefinem-o-jogo/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/07/Atendimento-ao-cliente-2-1024x1024.png",
        "category": "tecnologia"
    },
    {
        "title": "Se acirra a corrida dos computadores quânticos",
        "link": "https://olhardigital.com.br/2025/03/26/pro/se-acirra-a-corrida-dos-computadores-quanticos/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/computacao_quantica.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Como funciona o bafômetro? Conheça a tecnologia por trás do teste",
        "link": "https://olhardigital.com.br/2025/03/23/carros-e-tecnologia/como-funciona-o-bafometro-conheca-a-tecnologia-por-tras-do-teste/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/homem-bafometro-1-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Intel escolhe novo CEO para tentar sair da crise",
        "link": "https://tecnoblog.net/noticias/intel-escolhe-novo-ceo-para-tentar-sair-da-crise/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/lip-bu-tan.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Mercedes: novo sedan de entrada será elétrico",
        "link": "https://olhardigital.com.br/2025/03/14/carros-e-tecnologia/mercedes-novo-sedan-de-entrada-sera-eletrico/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/mercedes-benz.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Fãs de tecnologia, este documentário é imperdível!",
        "link": "https://pplware.sapo.pt/multimedia-2/cinema/fas-de-tecnologia-este-documentario-e-imperdivel-8/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/icahn.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Cemitério antigo revela indícios de interação entre neandertais e Homo sapiens",
        "link": "https://olhardigital.com.br/2025/03/11/ciencia-e-espaco/cemiterio-antigo-revela-indicios-de-interacao-entre-neandertais-e-homo-sapiens/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/neandertais-e-homo-sapiens-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Wi-Fi detecta depressão em idosos com IA inovadora",
        "link": "https://olhardigital.com.br/2025/03/06/medicina-e-saude/wi-fi-detecta-depressao-em-idosos-com-ia-inovadora/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-12-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Waze ficará um pouco diferente se você usa iPhone",
        "link": "https://olhardigital.com.br/2025/03/26/internet-e-redes-sociais/waze-ficara-um-pouco-diferente-se-voce-usa-iphone/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/waze.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Por que as ações de empresas de tecnologia estão despencando?",
        "link": "https://olhardigital.com.br/2025/03/16/pro/por-que-as-acoes-de-empresas-de-tecnologia-estao-despencando/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/empresas-de-tecnologia-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Mulheres na tecnologia em 2025: Será que avançamos?",
        "link": "https://olhardigital.com.br/2025/03/22/colunistas/mulheres-na-tecnologia-em-2025-sera-que-avancamos/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-21.jpg",
        "category": "tecnologia"
    },
    {
        "title": "10 notícias de tecnologia para você começar o dia (25/03)",
        "link": "https://www.tecmundo.com.br/mercado/403535-10-noticias-de-tecnologia-para-voce-comecar-o-dia-2503.htm?ab=true&",
        "image": "https://tm.ibxk.com.br/2025/03/24/24172048019036.jpg?ims=1280x605",
        "category": "tecnologia"
    },
    {
        "title": "Conheça a primeira lente plana para telescópios que capta cores reais",
        "link": "https://olhardigital.com.br/2025/03/06/ciencia-e-espaco/conheca-a-primeira-lente-plana-para-telescopios-que-capta-cores-reais/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/lente_plana.webp",
        "category": "tecnologia"
    },
    {
        "title": "Anomalia magnética da Terra pode colocar tecnologia espacial em risco",
        "link": "https://olhardigital.com.br/2025/04/01/ciencia-e-espaco/anomalia-magnetica-da-terra-pode-colocar-tecnologia-espacial-em-risco/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/04/amas-satlites-scaled.jpeg",
        "category": "tecnologia"
    },
    {
        "title": "Huawei Mate XT: o dobrável triplo da Huawei é uma obra-prima da tecnologia",
        "link": "https://pplware.sapo.pt/gadgets/huawei-mate-xt-o-dobravel-triplo-da-huawei-e-uma-obra-prima-da-tecnologia/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/pplware_mate_xt_1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Como criadores estão reinventando o marketing com tecnologia e IA",
        "link": "https://olhardigital.com.br/2025/03/06/pro/como-criadores-estao-reinventando-o-marketing-com-tecnologia-e-ia/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Gemini_Generated_Image_ur1yvpur1yvpur1y.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Bíblia do ChatGPT: OpenAI quer que toda a gente saiba usar a tecnologia",
        "link": "https://pplware.sapo.pt/inteligencia-artificial/biblia-do-chatgpt-openai-quer-que-toda-a-gente-saiba-usar-a-tecnologia/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/aprender_tecnologia_formacao.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Galaxy S26 pode abandonar uma câmera traseira e ganhar bateria maior",
        "link": "https://tecnoblog.net/noticias/galaxy-s26-pode-abandonar-uma-camera-traseira-e-ganhar-bateria-maior/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/01/004-product-galaxy-s25ultra-titaniumwhitesilver-1536x1024.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Jornalista testa exoesqueleto e desvenda mitos da tecnologia",
        "link": "https://www.tecmundo.com.br/produto/403154-jornalista-testa-exoesqueleto-e-desvenda-mitos-da-tecnologia.htm",
        "image": "https://tm.ibxk.com.br/2025/03/06/06170702756589.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "Computação dá grande salto com o primeiro computador biológico do mundo",
        "link": "https://olhardigital.com.br/2025/03/06/ciencia-e-espaco/computacao-da-grande-salto-com-o-primeiro-computador-biologico-do-mundo/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/computador_neuronios.webp",
        "category": "tecnologia"
    },
    {
        "title": "Você sabe usar IA? É o que tem feito a diferença na busca por trabalho",
        "link": "https://olhardigital.com.br/2025/03/10/pro/saber-usar-ia-tem-feito-a-diferenca-na-busca-por-trabalho/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/01/Destaque-OpenAI-Operator-1-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "10 notícias de tecnologia para você começar o dia (11/03)",
        "link": "https://www.tecmundo.com.br/mercado/403218-10-noticias-de-tecnologia-para-voce-comecar-o-dia-1103.htm",
        "image": "https://tm.ibxk.com.br/2025/03/10/10171056045218.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "SXSW 2025: inovações, tendências, o futuro do marketing e das relações",
        "link": "https://www.b9.com.br/171619/sxsw-2025-inovacoes-tendencias-o-futuro-do-marketing-e-das-relacoes/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/future.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Itália publica o primeiro jornal produzido inteiramente por IA",
        "link": "https://olhardigital.com.br/2025/03/18/olha-isso/italia-publica-o-primeiro-jornal-produzido-inteiramente-por-ia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-18-163815.png",
        "category": "tecnologia"
    },
    {
        "title": "Fim dos auriculares? Esta tecnologia transmite o áudio diretamente para os ouvidos!",
        "link": "https://pplware.sapo.pt/ciencia/fim-dos-auriculares-esta-tecnologia-transmite-o-audio-diretamente-para-os-ouvidos/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/ouvido_ouvir_direto-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Ulefone: smartphones resistentes que desafiam os limites da tecnologia",
        "link": "https://pplware.sapo.pt/smartphones-tablets/ulefone-smartphones-resistentes-que-desafiam-os-limites-da-tecnologia/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/ulefone_00-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Nasa: novo satélite exibe o ‘verdadeiro fundo do mar’; assista",
        "link": "https://olhardigital.com.br/2025/03/24/ciencia-e-espaco/nasa-novo-satelite-exibe-o-verdadeiro-fundo-do-mar-assista/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/shutterstock_1410343970.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Espanha propõe criminalizar deepfakes sexuais não consensuais com IA",
        "link": "https://olhardigital.com.br/2025/03/25/seguranca/espanha-propoe-criminalizar-deepfakes-sexuais-nao-consensuais-com-ia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/espanha-lei.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Google prevê aplicações práticas de computação quântica em cinco anos",
        "link": "https://olhardigital.com.br/2025/03/26/pro/google-preve-aplicacoes-praticas-de-computacao-quantica-em-cinco-anos/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/computao-quntica-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Martechs no SXSW 2025: como a tecnologia está redefinindo o marketing",
        "link": "https://www.b9.com.br/171496/martechs-no-sxsw-2025-como-a-tecnologia-esta-redefinindo-o-marketing/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/martech.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Apple e SpaceX: a nova tensão na tecnologia",
        "link": "https://olhardigital.com.br/2025/03/31/pro/apple-e-spacex-a-nova-tensao-na-tecnologia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/apple_.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Criatividade em movimento",
        "link": "https://www.b9.com.br/171664/criatividade-em-movimento/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/sxsw_bo.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Parece que encontramos o lítio necessário para a revolução das baterias",
        "link": "https://olhardigital.com.br/2025/03/14/pro/parece-que-encontramos-o-litio-necessario-para-a-revolucao-das-baterias/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/10/Litio-1-1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Na guerra por talentos em TI, o que tem motivado os profissionais?",
        "link": "https://olhardigital.com.br/2025/03/23/pro/na-guerra-por-talentos-em-ti-o-que-tem-motivado-os-profissionais/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2021/04/Profissionais-de-TI-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Volkswagen Tera é revelado oficialmente e chega ao mercado no 1º semestre de 2025",
        "link": "https://olhardigital.com.br/2025/03/02/carros-e-tecnologia/volkswagen-tera-e-revelado-oficialmente-e-chega-ao-mercado-no-1o-semestre-de-2025/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/volkswagen-tera-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "10 notícias de tecnologia para você começar o dia (14/03)",
        "link": "https://www.tecmundo.com.br/mercado/403303-10-noticias-de-tecnologia-para-voce-comecar-o-dia-1403.htm",
        "image": "https://tm.ibxk.com.br/2025/03/13/13170027172463.jpg?ims=1200xorig",
        "category": "tecnologia"
    },
    {
        "title": "iPhone 17 Pro deve ter tecnologia que celulares Android utilizam há algum tempo",
        "link": "https://www.tecmundo.com.br/produto/403278-iphone-17-pro-deve-ter-tecnologia-que-celulares-android-utilizam-ha-algum-tempo.htm?ab=true&",
        "image": "https://tm.ibxk.com.br/2025/03/12/12191807750043.jpg?ims=1280x605",
        "category": "tecnologia"
    },
    {
        "title": "Cientistas criam dispositivo VR que permite provar “comida digital”",
        "link": "https://tecnoblog.net/noticias/cientistas-criam-interface-vr-que-permite-provar-comida-digital/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2023/06/captura-de-tela-2023-06-05-as-15-23-45.png",
        "category": "tecnologia"
    },
    {
        "title": "Efeito DeepSeek: big techs devem aumentar gastos em IA",
        "link": "https://olhardigital.com.br/2025/03/18/pro/efeito-deepseek-big-techs-devem-aumentar-gastos-em-ia/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/deepseek-5-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Qualcomm leva disputa judicial com a Arm para agências antitruste globais",
        "link": "https://tecnoblog.net/noticias/qualcomm-leva-disputa-judicial-com-a-arm-para-agencias-antitruste-globais/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2024/04/predio-qualcomm.jpg",
        "category": "tecnologia"
    },
    {
        "title": "AMD Ryzen 9 9950X3D e 9900X3D chegam para quem quer alto desempenho no PC",
        "link": "https://tecnoblog.net/noticias/amd-ryzen-9-9950x3d-e-9900x3d-chegam-para-quem-quer-alto-desempenho-no-pc/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/chip-amd-ryzen-9-serie-9000.jpg",
        "category": "tecnologia"
    },
    {
        "title": "TV Samsung Neo QLED de 50″ tem menor preço que já vimos na Amazon",
        "link": "https://tecnoblog.net/achados/tv-samsung-neo-qled-de-50-tem-menor-preco-que-ja-vimos-na-amazon/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/5u4ud1v2.png",
        "category": "tecnologia"
    },
    {
        "title": "SXSW 2025: Tecnologia é política",
        "link": "https://www.b9.com.br/171349/sxsw-2025-tecnologia-e-politica/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/amywebb1.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Fãs de tecnologia, este documentário é imperdível!",
        "link": "https://pplware.sapo.pt/multimedia-2/cinema/fas-de-tecnologia-este-documentario-e-imperdivel-6/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/after-truth.jpg",
        "category": "tecnologia"
    },
    {
        "title": "OpenAI: nova ferramenta vai facilitar construção de agentes de IA",
        "link": "https://olhardigital.com.br/2025/03/11/pro/openai-nova-ferramenta-vai-facilitar-construcao-de-agentes-de-ia/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/openAI.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Filtro de cebola roxa bloqueia 99,9% dos raios UV",
        "link": "https://olhardigital.com.br/2025/03/21/ciencia-e-espaco/filtro-de-cebola-roxa-bloqueia-999-dos-raios-uv/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/Filtro-de-clula-solar-com-cebola-roxa-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Mistral AI planeja superar o DeepSeek com modelos de IA de código aberto",
        "link": "https://olhardigital.com.br/2025/03/07/pro/mistral-ai-planeja-superar-o-deepseek-com-modelos-de-ia-de-codigo-aberto/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/09/mistral.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Google e Meta esquentam debate sobre verificação de idade online",
        "link": "https://olhardigital.com.br/2025/03/13/seguranca/google-e-meta-esquentam-debate-sobre-verificacao-de-idade-online/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/garoto-rede-social.jpg",
        "category": "tecnologia"
    },
    {
        "title": "O que a tecnologia e o Big Data revelam sobre o inadimplente?",
        "link": "https://olhardigital.com.br/2025/03/29/noticias/o-que-a-tecnologia-e-o-big-data-revelam-sobre-o-inadimplente/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-20.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Corrida dos robôs: existe um favorito entre EUA e China",
        "link": "https://olhardigital.com.br/2025/03/28/pro/corrida-dos-robos-existe-um-favorito-entre-eua-e-china/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/humanoides-1.png",
        "category": "tecnologia"
    },
    {
        "title": "DeepSeek: IA chinesa já é usada em carros, telefones e até hospitais",
        "link": "https://olhardigital.com.br/2025/03/18/pro/deepseek-ia-chinesa-ja-e-usada-em-carros-telefones-e-ate-hospitais/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/DeepSeek-scaled.jpg",
        "category": "tecnologia"
    },
    {
        "title": "Os relacionamentos são o futuro e o futuro é feito de relacionamentos",
        "link": "https://www.b9.com.br/171322/os-relacionamentos-sao-o-futuro-e-o-futuro-e-feito-de-relacionamentos/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/MITTR.jpg",
        "category": "tecnologia"
    },

    {
        "title": "Jogos de hoje (29/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/29/internet-e-redes-sociais/jogos-de-hoje-29-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Tiktoker morre aos 16 anos, e namorada lamenta nas redes sociais",
        "link": "https://www.terra.com.br/diversao/gente/tiktoker-morre-aos-16-anos-e-namorada-lamenta-nas-redes-sociais,c59987ca01b847ef4e264d75a6cbf08fpg75msse.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/25/design-sem-nome-2025-03-25t191141-597-s4xwg6121aoz.png",
        "category": "esportes"
    },
    {
        "title": "Boston Celtics, da NBA, é vendido pelo maior valor da história dos EUA: R$ 34,6 bi",
        "link": "https://www.infomoney.com.br/esportes/boston-celtics-da-nba-e-vendido-pelo-maior-valor-da-historia-dos-eua-r-346-bi/",
        "image": "https://www.infomoney.com.br/wp-content/uploads/2025/03/2025-03-09T045451Z_1217000895_MT1USATODAY25624323_RTRMADP_3_NBA-LOS-ANGELES-LAKERS-AT-BOSTON-CELTICS.jpg?quality=70",
        "category": "esportes"
    },
    {
        "title": "1Win App: A forma mais fácil e segura de apostar pelo celular",
        "link": "https://www.insoonia.com/?p=103384",
        "image": "https://www.insoonia.com/wp-content/uploads/2025/02/1win.png",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (17/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/17/internet-e-redes-sociais/jogos-de-hoje-17-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Para se exercitar com estilo: Polar Ignite 3 com desconto; confira",
        "link": "https://www.infomoney.com.br/consumo/para-se-exercitar-com-estilo-polar-ignite-3-com-desconto-confira/",
        "image": "https://www.infomoney.com.br/wp-content/uploads/2025/02/Polar-Ignite-3-Divulgacao.jpg?fit=672%2C406&quality=70&strip=all",
        "category": "esportes"
    },
    {
        "title": "Sasha Meneghel criança: antes e depois da modelo chama atenção da web",
        "link": "https://www.terra.com.br/diversao/gente/sasha-meneghel-crianca-antes-e-depois-da-modelo-chama-atencao-da-web,c74dd67898bb5a419d5aaee5ab24c2f39hkhpduv.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/30/1136781570-saveclipapp1162000433440827669919354092890213992171017n.jpg",
        "category": "esportes"
    },
    {
        "title": "Internacional Campeão Gaúcho: Pilares do Time",
        "link": "https://www.terra.com.br/esportes/internacional/internacional-campeao-gaucho-pilares-do-time,448cbc0be8e9cad8f2f24a5b2bbb940fbiv7i99h.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/17/525952053-enm-5.jpg",
        "category": "esportes"
    },
    {
        "title": "Clembuterol: funções e riscos da droga que possui efeito termogênico",
        "link": "https://www.terra.com.br/vida-e-estilo/saude/clembuterol-funcoes-e-riscos-da-droga-que-possui-efeito-termogenico,2300577b414c88fa46198aef71b8251fasn700bo.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/02/593613614-clembuterol-1.jpg",
        "category": "esportes"
    },
    {
        "title": "De Rebeca Andrade a Fernanda Torres: 10 mulheres brasileiras que romperam barreiras",
        "link": "https://www.terra.com.br/nos/de-rebeca-andrade-a-fernanda-torres-10-mulheres-brasileiras-que-romperam-barreiras,c29dbbf87d0cf3e74176edc387d6a7e3g9w12uiy.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/07/mulheres-pioneiras-1hr84uyjman37.jpg",
        "category": "esportes"
    },
    {
        "title": "Beting e Rizzo, novos colunistas do 'Estadão', respondem: Neymar ainda tem espaço na seleção?",
        "link": "https://www.terra.com.br/esportes/futebol/beting-e-rizzo-novos-colunistas-do-estadao-respondem-neymar-ainda-tem-espaco-na-selecao,febf387318efa5784200d5db883f7e54tqego4rz.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/17/1762135878-cuhnya237zhgzei352bnkvvjwe.jpg",
        "category": "esportes"
    },
    {
        "title": "Governo Trump corta verba milionária de universidade por conta de atleta trans",
        "link": "https://veja.abril.com.br/mundo/governo-trump-corta-verba-milionaria-de-universidade-por-conta-de-atleta-trans",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/GettyImages-1833764322.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "esportes"
    },
    {
        "title": "Anitta usa look esportivo para homenagear vôlei em show no Rio",
        "link": "https://www.terra.com.br/diversao/carnaval/rio-de-janeiro/anitta-usa-look-esportivo-para-homenagear-volei-em-show-no-rio,67f0f6456bf6f4d6b61ce4433c0a0779c1e7bl61.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/05/anitta-qdq15y2kih4m.jpg",
        "category": "esportes"
    },
    {
        "title": "Maior presença feminina no trabalho pode adicionar até 20% ao PIB per capita mundial",
        "link": "https://www.infomoney.com.br/carreira/maior-presenca-feminina-no-trabalho-pode-adicionar-ate-20-ao-pib-per-capita-mundial/",
        "image": "https://www.infomoney.com.br/wp-content/uploads/2022/03/pexels-vlada-karpovich-7433930.jpg?quality=70",
        "category": "esportes"
    },
    {
        "title": "O motivo por trás do convite de Trump ao Kansas City Chiefs à Casa Branca",
        "link": "https://veja.abril.com.br/coluna/veja-gente/o-motivo-por-tras-do-convite-de-trump-ao-kansas-city-chiefs-a-casa-branca",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/GettyImages-2205585469.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "esportes"
    },
    {
        "title": "Futebol semanal para perder gordura?",
        "link": "https://www.tecmundo.com.br/ciencia/403262-futebol-semanal-para-perder-gordura.htm",
        "image": "https://tm.ibxk.com.br/2025/03/12/12142727094225.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Tony Hawk's Pro Skater 3+4 é anunciado com Rayssa Leal e pista no Brasil! Veja trailer, data e preço",
        "link": "https://www.tecmundo.com.br/voxel/500883-tony-hawks-pro-skater-34-e-anunciado-rayssa-leal-e-pista-no-brasil-veja-trailer-data-e-preco.htm",
        "image": "https://tm.ibxk.com.br/2025/03/04/04153150453005.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Real Madrid x Atlético de Madrid: onde assistir, horário e escalações do jogo da Champions",
        "link": "https://olhardigital.com.br/2025/03/04/internet-e-redes-sociais/real-madrid-x-atletico-de-madrid-onde-assistir-horario-e-escalacoes-do-jogo-da-champions/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/real_madrid_atletico_de_madrid.jpg",
        "category": "esportes"
    },
    {
        "title": null,
        "link": "https://www.uol.com.br/carnaval/noticias/redacao/2025/03/08/anitta-fecha-carnaval-inspirada-na-vitoria-olimpica-de-rebeca-andrade.htm",
        "image": "https://conteudo.imguol.com.br/c/splash/7e/2025/03/08/anitta-homenageia-rebeca-andrade-e-ginastica-artistica-em-seu-bloco-no-rio-1741431134959_v2_615x300.jpg",
        "category": "esportes"
    },
    {
        "title": "Estudo desmente mais uma fake news sobre Covid-19 e vacinação",
        "link": "https://olhardigital.com.br/2025/03/11/medicina-e-saude/estudo-desmente-mais-uma-fake-news-sobre-covid-19-e-vacinacao/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/08/vacina_covid.jpg",
        "category": "esportes"
    },
    {
        "title": "Surf para Todos: projeto democratiza o acesso ao surfe",
        "link": "https://www.terra.com.br/noticias/surf-para-todos-projeto-democratiza-o-acesso-ao-surfe,4d80e8d133bf06c7de8602626c0daab7p1zegyc3.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/28/1598824872-763c1525-6aa1-451a-a08e-8e858c07d907.jpg",
        "category": "esportes"
    },
    {
        "title": "W7M Esports anuncia Lucas \"urban0\" Urbano como novo reforço da equipe de CS2",
        "link": "https://www.terra.com.br/esportes/w7m-esports-anuncia-lucas-urban0-urbano-como-novo-reforco-da-equipe-de-cs2,0d87cc82a98c0cefd03dc8bd28adcc6c6uo3iyqd.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/28/241031734-0639f7c7-f059-59ea-9c25-0855575a05b3-1638x2048.png",
        "category": "esportes"
    },
    {
        "title": "Totti diz que irá para Rússia 'como um homem do esporte'",
        "link": "https://www.terra.com.br/esportes/totti-diz-que-ira-para-russia-como-um-homem-do-esporte,1552e589a74c346cf59c18d3a3bb9bfec3bio5cb.html",
        "image": "https://s1.trrsf.com/update-1698692222/fe/zaz-mod-t360-icons/svg/logos/terra-16x9-borda.png",
        "category": "esportes"
    },
    {
        "title": "Veja a lista dos 10 países mais felizes do mundo em 2025, segundo a ONU",
        "link": "https://olhardigital.com.br/2025/04/01/pro/veja-a-lista-dos-10-paises-mais-felizes-do-mundo-em-2025-segundo-a-onu/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-15-3-scaled.jpg",
        "category": "esportes"
    },
    {
        "title": "Praia de Copacabana recebe o Beach Games, o festival de esportes de praia, a partir desta sexta",
        "link": "https://www.terra.com.br/esportes/tenis/praia-de-copacabana-recebe-o-beach-games-o-festival-de-esportes-de-praia-a-partir-desta-sexta,c9059710c5b9e18000e074453397f118cqge8yh0.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/12/830037071-beachgamesgd.jpeg",
        "category": "esportes"
    },
    {
        "title": "Regras de Vestimenta e Moda no Tênis, Golfe e Natação",
        "link": "https://modaparahomens.com.br/regras-de-vestimenta-e-moda-no-tenis-golfe-e-natacao/",
        "image": "https://modaparahomens.com.br/wp-content/uploads/tenis-golfe-natacao.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (04/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/04/internet-e-redes-sociais/jogos-de-hoje-04-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (11/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/11/internet-e-redes-sociais/jogos-de-hoje-11-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": null,
        "link": "https://www.uol.com.br/esporte/futebol/colunas/perrone/2025/03/14/giuliano-quer-retomar-cobranca-na-justica-contra-corinthians-clube-rebate.htm",
        "image": "https://conteudo.imguol.com.br/c/esporte/12/2019/04/05/entrada-principal-do-parque-sao-jorge-sede-social-do-corinthians-1554484449154_v2_615x300.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (10/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/10/internet-e-redes-sociais/jogos-de-hoje-10-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "PSG x Liverpool: onde assistir, horário e escalações do jogo da Champions",
        "link": "https://olhardigital.com.br/2025/03/05/internet-e-redes-sociais/psg-x-liverpool-onde-assistir-horario-e-escalacoes-do-jogo-da-champions/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/psg_liverpool.jpg",
        "category": "esportes"
    },
    {
        "title": "Signo de Áries: confira as características e os desafios dos arianos",
        "link": "https://www.terra.com.br/vida-e-estilo/signo-de-aries-confira-as-caracteristicas-e-os-desafios-dos-arianos,fb874d648101de1d360971a09a9bb3eff0ilf8kk.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/25/573659675-aries-quais-as-tendencias-do-signo-para-o-mes-de-abril.jpg",
        "category": "esportes"
    },
    {
        "title": "SXSW 2025: A grande reinicialização dos games",
        "link": "https://www.b9.com.br/171540/sxsw-2025-a-grande-reinicializacao-dos-games/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/game.jpg",
        "category": "esportes"
    },
    {
        "title": "Parceira de top 10 mundial inicia uma nova era no esporte",
        "link": "https://www.terra.com.br/esportes/tenis/parceira-de-top-10-mundial-inicia-uma-nova-era-no-esporte,a9fe26707985b7dd1372e439191d3e4cnpa8uwz0.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/27/398651881-giovanicarianimed2.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (01/04/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/04/01/internet-e-redes-sociais/jogos-de-hoje-01-04-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Maceió pé na areia! Pacotes em oferta para o Pratagy Beach All Inclusive a partir de R$ 2.830 por pessoa, em até 12x",
        "link": "https://www.melhoresdestinos.com.br/promocao/maceio-pe-na-areia-pacotes-semana15mar",
        "image": "https://www.melhoresdestinos.com.br/wp-content/uploads/2025/03/pratagy-semana-consumidor25-capa.jpg",
        "category": "esportes"
    },
    {
        "title": "1Win App: A forma mais fácil e segura de apostar pelo celular",
        "link": "https://www.insoonia.com/__trashed/",
        "image": "https://www.insoonia.com/wp-content/uploads/2025/02/1win.png",
        "category": "esportes"
    },
    {
        "title": "Patrocinadora de Fluminense e São Paulo chega à Kings League Brazil",
        "link": "https://www.terra.com.br/esportes/fluminense/patrocinadora-de-fluminense-e-sao-paulo-chega-a-kings-league-brazil,0452e302836a98e608daae627c81b6d6pqmyascq.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/28/629253212-kings-leagueqcv6xmqjwznn1xquuofuxxs0q-e1677523711719-610x400.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (21/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/21/internet-e-redes-sociais/jogos-de-hoje-21-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "STF tem maioria para validar esportes com animais considerados manifestações culturais",
        "link": "https://www.conjur.com.br/2025-mar-14/stf-tem-maioria-para-validar-esportes-com-animais-considerados-manifestacoes-culturais/",
        "image": "https://www.conjur.com.br/wp-content/uploads/2023/23/rodeio-festa-peao.jpeg",
        "category": "esportes"
    },
    {
        "title": null,
        "link": "https://www.uol.com.br/esporte/ultimas-noticias/2025/03/23/furia-investimento-esportes.htm",
        "image": "https://conteudo.imguol.com.br/c/esporte/75/2025/03/19/neymar-e-caio-castro-fazem-parte-de-equipes-da-furia-1742416636982_v2_615x300.jpg",
        "category": "esportes"
    },
    {
        "title": "A grande mudança na vida de Rebeca Andrade pós-medalha de ouro",
        "link": "https://veja.abril.com.br/coluna/veja-gente/a-grande-mudanca-na-vida-de-rebeca-andrade-pos-medalha-de-ouro",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-04-at-03.19.27.jpeg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "esportes"
    },
    {
        "title": "1Win App: A forma mais fácil e segura de apostar pelo celular",
        "link": "https://www.insoonia.com/1win-app-a-forma-mais-facil-e-segura-de-apostar-pelo-celular/",
        "image": "https://www.insoonia.com/wp-content/uploads/2025/02/1win.png",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (28/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/28/internet-e-redes-sociais/jogos-de-hoje-28-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Bill Gates diz que a maioria dos humanos devem ser substituídos por IA nos próximos 10 anos",
        "link": "https://www.terra.com.br/nos/bill-gates-diz-que-a-maioria-dos-humanos-devem-ser-substituidos-por-ia-nos-proximos-10-anos,7117f99f080f3bbfc95da0fef4721c47wtfeny43.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/20/1935110813-xnhzuf72tfg6njukbjzzn25hfi.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (15/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/15/internet-e-redes-sociais/jogos-de-hoje-15-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Disney+ lança novo plano padrão com anúncios no Brasil por preço promocional; confira valores",
        "link": "https://www.tecmundo.com.br/minha-serie/600880-disney-lanca-novo-plano-padrao-com-anuncios-no-brasil-por-preco-promocional-confira-valores.htm",
        "image": "https://tm.ibxk.com.br/2025/03/07/07152250838089.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Especialista diz: caminhar é ótimo para a saúde, mas há outra atividade igualmente benéfica — se você tiver iPhone pode começar em casa hoje mesmo",
        "link": "https://br.ign.com/saude/137758/news/especialista-diz-caminhar-e-otimo-para-a-saude-mas-ha-outra-atividade-igualmente-benefica-se-voce-ti",
        "image": "https://sm.ign.com/t/ign_br/screenshot/default/blob_jf4t.1200.jpg",
        "category": "esportes"
    },
    {
        "title": "Mulheres trans têm vantagens injustas no esporte?",
        "link": "https://www.terra.com.br/noticias/mulheres-trans-tem-vantagens-injustas-no-esporte,3b6bb8ec2a6f6500edcaea1926a0fe89hw1p22as.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/23/2035003610-71975287354.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (26/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/26/internet-e-redes-sociais/jogos-de-hoje-26-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Esportivabet é confiável? Análise e como apostar em 2025",
        "link": "https://catracalivre.com.br/apostas/esportivabet-e-confiavel/",
        "image": "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1280,h=680,fit=cover,format=jpeg/wp-content/uploads/2025/04/logo-esportivabet.png",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (19/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/19/internet-e-redes-sociais/jogos-de-hoje-19-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Max: lançamentos da semana (10 a 16 de março)",
        "link": "https://olhardigital.com.br/2025/03/10/cinema-e-streaming/max-lancamentos-da-semana-10-a-16-de-marco/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Destaque-Lancamentos-da-semana-10-a-16-de-marco-Max.jpg",
        "category": "esportes"
    },
    {
        "title": "Bahia x Corinthians: onde assistir, horário e escalação do jogo do Brasileirão",
        "link": "https://olhardigital.com.br/2025/03/30/internet-e-redes-sociais/bahia-x-corinthians-onde-assistir-horario-e-escalacao-do-jogo-do-brasileirao/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/bahia-x-corinthians.png",
        "category": "esportes"
    },
    {
        "title": "Anitta homenageia Rebeca Andrade com look de ginasta e medalha em bloco no RJ",
        "link": "https://www.terra.com.br/diversao/carnaval/rio-de-janeiro/anitta-homenageia-rebeca-andrade-com-look-de-ginasta-e-medalha-em-bloco-no-rj,398a96012ea3d7f7450bd577189a7a977o6e5l35.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/08/01-anitta-(7)-1hv60gtijdxkk.jpg",
        "category": "esportes"
    },
    {
        "title": "Nintendo cria modo que permite emprestar jogos do Switch; veja como vai funcionar",
        "link": "https://olhardigital.com.br/2025/03/29/games-e-consoles/nintendo-cria-modo-que-permite-emprestar-jogos-do-switch-veja-como-vai-funcionar/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-28-141111.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (16/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/16/internet-e-redes-sociais/jogos-de-hoje-16-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (18/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/18/internet-e-redes-sociais/jogos-de-hoje-18-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "STF autoriza esportes com animais considerados manifestações culturais",
        "link": "https://www.conjur.com.br/2025-mar-17/stf-autoriza-esportes-com-animais-considerados-manifestacoes-culturais/",
        "image": "https://www.conjur.com.br/wp-content/uploads/2024/10/Festa-peao-rodeio-barretos.jpeg",
        "category": "esportes"
    },
    {
        "title": "5 mitos sobre o PC gamer que você ainda acredita",
        "link": "https://olhardigital.com.br/2025/03/17/dicas-e-tutoriais/5-mitos-sobre-o-pc-gamer-que-voce-ainda-acredita/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/PC-gamer-via-Ella-Don-Unsplash.png",
        "category": "esportes"
    },
    {
        "title": "Palmeiras x São Paulo: onde assistir e horário da semifinal do Paulistão",
        "link": "https://olhardigital.com.br/2025/03/10/internet-e-redes-sociais/palmeiras-x-sao-paulo-onde-assistir-e-horario-da-semifinal-do-paulistao/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/08/palmeiras-x-sao-paulo-2-1024x576.png",
        "category": "esportes"
    },
    {
        "title": "​​1º Jogos Tradicionais dos Povos Originários do Sul celebrará cultura e esporte indígena em abril de 2025",
        "link": "https://www.terra.com.br/noticias/1-jogos-tradicionais-dos-povos-originarios-do-sul-celebrara-cultura-e-esporte-indigena-em-abril-de-2025,a74997e486ed26844558ece942a940f7jpfp1zws.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/11/207749738-adkqnzcidiwez4usujms2ajxiiikxgkoqfelswkr1y-hgnsiyr3qmnliviejnzemc2g6nqoy4e2u6u3wkrazhdbrgtnkhsdzyqt13mpa5xgs0-d-e1-ft.png",
        "category": "esportes"
    },
    {
        "title": "Corinthians é a 10ª equipe do mundo que mais gera valor a marcas em redes, diz estudo",
        "link": "https://www.infomoney.com.br/esportes/corinthians-e-a-10a-equipe-do-mundo-que-mais-gera-valor-a-marcas-em-redes-diz-estudo/",
        "image": "https://www.infomoney.com.br/wp-content/uploads/2019/06/corinthians-6.jpg?quality=70",
        "category": "esportes"
    },
    {
        "title": "One UI 7.0: Always On Display recebe integração ao placar de esportes do Google",
        "link": "https://www.tudocelular.com/samsung/noticias/n232643/one-ui-70-always-on-display-esportes-google.html",
        "image": "https://t2.tudocdn.net/729969?w=1920",
        "category": "esportes"
    },
    {
        "title": "Sucesso da Netflix, Adolescência mostra que é preciso ficar alerta com os filhos na internet",
        "link": "https://www.tecmundo.com.br/minha-serie/600973-sucesso-da-netflix-adolescencia-mostra-que-e-preciso-ficar-alerta-com-os-filhos-na-internet.htm",
        "image": "https://tm.ibxk.com.br/2025/03/26/26120519046102.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (12/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/12/internet-e-redes-sociais/jogos-de-hoje-12-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (03/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/03/internet-e-redes-sociais/jogos-de-hoje-03-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Por que plano da China de virar potência do futebol deu tão errado",
        "link": "https://www.bbc.com/portuguese/articles/c05m342em3lo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/c7dd/live/b96fcca0-03d3-11f0-9b36-09a73999182b.jpg",
        "category": "esportes"
    },
    {
        "title": "Ginástica: professora inspira mulheres a cuidar da saúde com aulas em espaços públicos",
        "link": "https://www.terra.com.br/esportes/ginastica-professora-inspira-mulheres-a-cuidar-da-saude-com-aulas-em-espacos-publicos,4acbc89acf98139303cbb15bd3be2fa7mpqbj3el.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/08/1082122303-dpa-0703.jpg",
        "category": "esportes"
    },
    {
        "title": "Puma cria comercial 100% produzido por IAs, sem humanos no controle",
        "link": "https://www.b9.com.br/171742/puma-comercial-inteligencia-artificial/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/puma-ai-ad.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (23/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/23/internet-e-redes-sociais/jogos-de-hoje-23-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (05/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/05/internet-e-redes-sociais/jogos-de-hoje-05-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "All inclusive no Caribe! Pacotes de viagem para Punta Cana a partir de R$ 7.797 em até 12x",
        "link": "https://www.melhoresdestinos.com.br/promocao/all-inclusive-no-caribe-pacotes-puta-cana",
        "image": "https://www.melhoresdestinos.com.br/wp-content/uploads/2024/09/punta-cana-capa-2.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (14/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/14/internet-e-redes-sociais/jogos-de-hoje-14-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (27/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/27/internet-e-redes-sociais/jogos-de-hoje-27-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (07/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/07/internet-e-redes-sociais/jogos-de-hoje-07-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Netflix vai investir US$ 18 bilhões em conteúdo em 2025",
        "link": "https://www.tecmundo.com.br/minha-serie/600872-netflix-vai-investir-us-18-bilhoes-em-conteudo-em-2025.htm",
        "image": "https://tm.ibxk.com.br/2025/03/07/07101151226143.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Data centers crescem em São Paulo durante a corrida das IAs",
        "link": "https://olhardigital.com.br/2025/03/30/noticias/data-centers-crescem-em-sao-paulo-durante-a-corrida-das-ias/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Data-Center.jpg",
        "category": "esportes"
    },
    {
        "title": "PSV x Arsenal: onde assistir, horário e escalações do jogo da Champions",
        "link": "https://olhardigital.com.br/2025/03/04/internet-e-redes-sociais/psv-x-arsenal-onde-assistir-horario-e-escalacoes-do-jogo-da-champions/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/psv_arsenal.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (25/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/25/internet-e-redes-sociais/jogos-de-hoje-25-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (20/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/20/internet-e-redes-sociais/jogos-de-hoje-20-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (22/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/22/internet-e-redes-sociais/jogos-de-hoje-22-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Galaxy Watch 7 fica 47% mais barato em oferta na Amazon",
        "link": "https://tecnoblog.net/achados/galaxy-watch-7-fica-47-mais-barato-em-oferta-na-amazon/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2024/12/galaxy-watch-7-achado-dia.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (31/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/31/internet-e-redes-sociais/jogos-de-hoje-31-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas-2/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": null,
        "link": "https://www.uol.com.br/esporte/ultimas-noticias/ag-fight/2025/03/07/prestes-a-completar-50-anos-anderson-silva-descarta-aposentadoria-lutar-e-minha-paixao.htm",
        "image": "https://conteudo.imguol.com.br/c/_layout/v3/jupiter/share.png",
        "category": "esportes"
    },
    {
        "title": "McGregor revela que pode deixar MMA de lado por vida na política",
        "link": "https://www.terra.com.br/esportes/lutas/mcgregor-revela-que-pode-deixar-mma-de-lado-por-vida-na-politica,0e92514da91cf7668cb4a86767a4e89amu1vxar8.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/29/936741789-mcgregortrump.jpg",
        "category": "esportes"
    },
    {
        "title": "Em homenagem ao Japão, Real Betis e Hummel lançam camisa “Naruto”",
        "link": "https://catracalivre.com.br/jogos/em-homenagem-ao-japao-real-betis-e-hummel-lancam-camisa-naruto/",
        "image": "https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=1280,h=680,fit=cover,format=jpeg/wp-content/uploads/2025/03/betis-naruto-2.png",
        "category": "esportes"
    },
    {
        "title": "Red Bull Bragantino x Ceará: onde assistir, horário e escalações do jogo do Brasileirão",
        "link": "https://olhardigital.com.br/2025/03/31/internet-e-redes-sociais/red-bull-bragantino-x-ceara-onde-assistir-horario-e-escalacoes-do-jogo-do-brasileirao/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/bragantino_ceara.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (30/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/30/internet-e-redes-sociais/jogos-de-hoje-30-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Surf para Todos: projeto democratiza o acesso ao surfe",
        "link": "https://www.dino.com.br/releases/surf-para-todos-projeto-democratiza-o-acesso-ao-surfe-dino890312820131",
        "image": "https://s2-valor.glbimg.com/WjeShzTahXEQjVC_RhHQW41az20=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2025/0/k/BGjwWQSGSfs9yEkdbXYQ/763c1525-6aa1-451a-a08e-8e858c07d907.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (13/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/13/internet-e-redes-sociais/jogos-de-hoje-13-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "Jogos de hoje (24/03/25): onde assistir futebol ao vivo e horários das partidas",
        "link": "https://olhardigital.com.br/2025/03/24/internet-e-redes-sociais/jogos-de-hoje-24-03-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
        "category": "esportes"
    },
    {
        "title": "O que acontece quando um prêmio da Mega Sena não é resgatado?",
        "link": "https://veja.abril.com.br/comportamento/o-que-acontece-quando-um-premio-da-mega-sena-nao-e-resgatado/",
        "image": "https://veja.abril.com.br/wp-content/uploads/2024/12/GettyImages-1190666661.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "esportes"
    },
    {
        "title": "Como Começar a Apostar no Brasil: Guia para Iniciantes no Mercado Brasileiro",
        "link": "https://windowsteam.com.br/como-comecar-a-apostar-no-brasil/",
        "image": "https://windowsteam.com.br/wp-content/uploads/2025/03/como-comecar-a-apostar-no-Brasil-com-seguranca.png",
        "category": "esportes"
    },
    {
        "title": "Olímpiadas 2028: onde e quando será? Saiba tudo!",
        "link": "https://www.terra.com.br/esportes/olimpiadas-2028-onde-e-quando-sera-saiba-tudo,fc55cee742f715660cbc04179e75c4ffqhl7l39u.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/08/11/1563038167-imageplaceholder-1-aspect-ratio-512-320-41.jpg",
        "category": "esportes"
    },
    {
        "title": "Trump planeja suspender de quase R$ 1 bilhão em universidade devido à política transgênero; entenda",
        "link": "https://www.terra.com.br/noticias/mundo/trump-planeja-suspender-verba-de-quase-r-1-bilhao-em-universidade-devido-a-politica-transgenero-entenda,63a87a7a330e2c85502879432d020429v1akm1li.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/20/gettyimages-2205585469-1iun54frdhyya.jpg",
        "category": "esportes"
    },
    {
        "title": null,
        "link": "https://www.uol.com.br/guia-de-compras/ultimas-noticias/2025/03/19/review-apple-watch-ultra-2-testes-bateria-desempenho-e-mais.htm",
        "image": "https://conteudo.imguol.com.br/c/noticias/cf/2025/03/17/review-apple-watch-ultra-corrida-ao-ar-livre-1742223385949_v2_615x300.jpg",
        "category": "esportes"
    },
    {
        "title": "Galaxy: One UI 7 tem bug na Now Bar semanas antes do lançamento",
        "link": "https://www.tecmundo.com.br/software/403643-galaxy-one-ui-7-tem-bug-na-now-bar-semanas-antes-do-lancamento.htm",
        "image": "https://tm.ibxk.com.br/2025/03/07/07155931733178.jpg?ims=1200xorig",
        "category": "esportes"
    },
    {
        "title": "Caribe colombiano! Passagens aéreas para San Andrés ou Cartagena a partir de R$ 2.255 ida e volta",
        "link": "https://www.melhoresdestinos.com.br/promocao/caribe-colombiano-passagens-san-dres-cartagena-2255",
        "image": "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/reveillon-cartagena-capa2019-03.jpg",
        "category": "esportes"
    },
    {
        "title": "CEO da Netflix se diz surpreso com escolha do nome Max e critica Apple TV+",
        "link": "https://tecnoblog.net/noticias/ceo-da-netflix-se-diz-surpreso-com-escolha-do-nome-max-e-critica-apple-tv/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/Captura-de-Tela-2025-03-20-as-15.24.22-1.png",
        "category": "esportes"
    },

    {
        "title": "SXSW 2025: da vanguarda ao hype, do fight the power ao deslumbramento",
        "link": "https://www.b9.com.br/171650/sxsw-2025-da-vanguarda-ao-hype-do-fight-the-power-ao-deslumbramento/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/sx.jpg",
        "category": "saúde"
    },
    {
        "title": "A Estação Espacial Internacional está “imunda”",
        "link": "https://pplware.sapo.pt/ciencia/a-estacao-espacial-internacional-esta-imunda/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/iss_imunda00.webp",
        "category": "saúde"
    },
    {
        "title": "Apple quer mesmo ter no seu ecossistema um médico particular. Vem aí uma nova app Saúde",
        "link": "https://pplware.sapo.pt/apple/apple-quer-mesmo-ter-no-seu-ecossistema-um-medico-particular-vem-ai-uma-nova-app-saude/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/nova_app_saude00.webp",
        "category": "saúde"
    },
    {
        "title": "Doutor Google: será possível receber sugestões de saúde de usuários com o mesmo ‘problema’",
        "link": "https://olhardigital.com.br/2025/03/18/internet-e-redes-sociais/doutor-google-sera-possivel-receber-sugestoes-de-saude-de-usuarios-com-o-mesmo-problema/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/02/google-1.jpg",
        "category": "saúde"
    },
    {
        "title": "Como a deficiência de ferro afeta o corpo humano? Descubra",
        "link": "https://olhardigital.com.br/2025/03/29/medicina-e-saude/como-a-deficiencia-de-ferro-afeta-o-corpo-humano-descubra/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-18-2-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Dragon Copilot: Microsoft revela assistente de IA de voz para médicos",
        "link": "https://olhardigital.com.br/2025/03/03/medicina-e-saude/dragon-copilot-microsoft-revela-assistente-de-ia-de-voz-para-medicos/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/12/ia_saude.jpg",
        "category": "saúde"
    },
    {
        "title": "Dançar também é exercício? Estudo aponta benefícios da atividade",
        "link": "https://veja.abril.com.br/saude/dancar-tambem-e-exercicio-estudo-aponta-beneficios-da-atividade",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/02/GettyImages-1395199135.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "saúde"
    },
    {
        "title": "Buscas do Google vão exibir mais informações sobre saúde com ajuda da IA",
        "link": "https://tecnoblog.net/noticias/buscas-do-google-vao-exibir-mais-informacoes-sobre-saude-com-ajuda-da-ia/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/google-buscas-saude.jpg",
        "category": "saúde"
    },
    {
        "title": "'Adolescência': como a saúde mental reflete problemas da vida contemporânea",
        "link": "https://www.bbc.com/portuguese/articles/ckgr66y4gg1o",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/512e/live/53a1d130-08d7-11f0-b2d7-5dc912cb53f5.jpg",
        "category": "saúde"
    },
    {
        "title": "Cinco anos de pandemia: as transformações que a Covid-19 deixou",
        "link": "https://olhardigital.com.br/2025/03/11/medicina-e-saude/cinco-anos-de-pandemia-as-transformacoes-que-a-covid-19-deixou/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/09/covid-19-1024x576.png",
        "category": "saúde"
    },
    {
        "title": "Estamos mais preparados atualmente para enfrentar uma pandemia?",
        "link": "https://olhardigital.com.br/2025/03/19/medicina-e-saude/estamos-mais-preparados-atualmente-para-enfrentar-uma-pandemia/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/pandemia.jpg",
        "category": "saúde"
    },
    {
        "title": "Quase 30% dos adultos portugueses têm obesidade… DGS anuncia plano de controlo",
        "link": "https://pplware.sapo.pt/ciencia/quase-30-dos-adultos-portugueses-tem-obesidade-dgs-anuncia-plano-de-controlo/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/01/obesidade01.jpg",
        "category": "saúde"
    },
    {
        "title": "O que é o Receita Saúde e o que muda na declaração do Imposto de Renda?",
        "link": "https://olhardigital.com.br/2025/03/06/pro/o-que-e-o-receita-saude-e-o-que-muda-na-declaracao-do-imposto-de-renda/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/receita-sade-imposto-renda.png",
        "category": "saúde"
    },
    {
        "title": "Doar sangue faz bem para a nossa saúde, diz pesquisa britânica",
        "link": "https://olhardigital.com.br/2025/03/14/medicina-e-saude/doar-sangue-faz-bem-para-a-nossa-saude-diz-pesquisa-britanica/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/Bolsa-de-sangue-em-um-hospital-1024x576.png",
        "category": "saúde"
    },
    {
        "title": "Qual a relação entre demência e apneia do sono? Veja o que diz a ciência",
        "link": "https://olhardigital.com.br/2025/04/01/medicina-e-saude/qual-a-relacao-entre-demencia-e-apneia-do-sono-veja-o-que-diz-a-ciencia/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-14.png",
        "category": "saúde"
    },
    {
        "title": "Veja o que acontece com seu cérebro quando você tira uma pausa das redes sociais",
        "link": "https://olhardigital.com.br/2025/03/19/medicina-e-saude/veja-o-que-acontece-com-seu-cerebro-quando-voce-tira-uma-pausa-das-redes-sociais/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/Regulamentao-das-redes-sociais.png",
        "category": "saúde"
    },
    {
        "title": "Por que beber álcool pode causar câncer?",
        "link": "https://olhardigital.com.br/2025/03/16/medicina-e-saude/por-que-beber-alcool-pode-causar-cancer/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/alcool-cancer-4-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "HUAWEI Watch D2 chega a Portugal para revolucionar a monitorização da saúde",
        "link": "https://pplware.sapo.pt/gadgets/huawei-watch-d2-chega-a-portugal-para-revolucionar-a-monitorizacao-da-saude/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/HUAWEI-Watch-D2-8.jpg",
        "category": "saúde"
    },
    {
        "title": "Influenciadores digitais promovem exames médicos desnecessários, alerta pesquisa",
        "link": "https://olhardigital.com.br/2025/03/07/medicina-e-saude/influenciadores-digitais-promovem-exames-medicos-desnecessarios-alerta-pesquisa/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Design-sem-nome-16.jpg",
        "category": "saúde"
    },
    {
        "title": "IA da Amazon buscará produtos que combinam com seus interesses",
        "link": "https://olhardigital.com.br/2025/03/26/pro/ia-da-amazon-buscara-produtos-que-combinam-com-seus-interesses/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/IA-amazon.jpg",
        "category": "saúde"
    },
    {
        "title": "Saúde cognitiva: 10 alimentos ricos em vitamina B12 para sua dieta",
        "link": "https://olhardigital.com.br/2025/03/27/medicina-e-saude/saude-cognitiva-10-alimentos-ricos-em-vitamina-b12-para-sua-dieta/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/shutterstock_1560379811.jpg",
        "category": "saúde"
    },
    {
        "title": "Data centers crescem em São Paulo durante a corrida das IAs",
        "link": "https://olhardigital.com.br/2025/03/30/noticias/data-centers-crescem-em-sao-paulo-durante-a-corrida-das-ias/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Data-Center.jpg",
        "category": "saúde"
    },
    {
        "title": "Papa Francisco manda sua primeira mensagem de voz aos fiéis desde que foi hospitalizado, há três semanas",
        "link": "https://www.bbc.com/portuguese/articles/ckgzy27ze0po",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/8619/live/3d99c4b0-faef-11ef-9f52-b9fcdb2cd29e.jpg",
        "category": "saúde"
    },
    {
        "title": "As tatuagens estão associadas a um aumento do risco de cancro?",
        "link": "https://pplware.sapo.pt/ciencia/as-tatuagens-estao-associadas-a-um-aumento-do-risco-de-cancro/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/tatuagem-2.jpg",
        "category": "saúde"
    },
    {
        "title": "Café de um dia para o outro faz mal? Entenda os efeitos no corpo",
        "link": "https://olhardigital.com.br/2025/03/21/medicina-e-saude/cafe-de-um-dia-para-o-outro-faz-mal-entenda-os-efeitos-no-corpo/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Caf-5-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Vacinas contra Covid abrem caminho para revolução no tratamento do câncer",
        "link": "https://olhardigital.com.br/2025/03/13/medicina-e-saude/vacinas-contra-covid-abrem-caminho-para-revolucao-no-tratamento-do-cancer/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/12/vacinas-1.jpg",
        "category": "saúde"
    },
    {
        "title": "EUA: impactos das mudanças climáticas na saúde já são notados",
        "link": "https://olhardigital.com.br/2025/03/06/ciencia-e-espaco/eua-impactos-das-mudancas-climaticas-na-saude-ja-sao-notados/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/mudana-clima.jpg",
        "category": "saúde"
    },
    {
        "title": "Lula será candidato se estiver bem de saúde, e saúde dele está forte, diz Janja",
        "link": "https://www.bbc.com/portuguese/articles/cvge6309vg1o",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/f21e/live/a8942f10-0951-11f0-bdd3-f7314caa23ee.jpg",
        "category": "saúde"
    },
    {
        "title": "Apple quer usar AirPods para funções inéditas em fones de ouvido",
        "link": "https://olhardigital.com.br/2025/03/26/pro/apple-quer-usar-airpods-para-funcoes-ineditas-em-fones-de-ouvido/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/08/airpods1.jpg",
        "category": "saúde"
    },
    {
        "title": "IA pode detectar doenças intestinais que resultam em morte prematura",
        "link": "https://olhardigital.com.br/2025/03/25/medicina-e-saude/ia-pode-detectar-doencas-intestinais-que-resultam-em-morte-prematura/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/interstino.jpg",
        "category": "saúde"
    },
    {
        "title": "Afastamentos por saúde mental dobraram nos últimos 10 anos",
        "link": "https://olhardigital.com.br/2025/03/13/medicina-e-saude/afastamentos-por-saude-mental-dobraram-nos-ultimos-10-anos/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/saudemental-trabalho.jpg",
        "category": "saúde"
    },
    {
        "title": "Ainda há pessoas morrendo de Covid-19 atualmente?",
        "link": "https://olhardigital.com.br/2025/03/11/medicina-e-saude/ainda-ha-pessoas-morrendo-de-covid-19-atualmente/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/Covid-IA-2.jpg",
        "category": "saúde"
    },
    {
        "title": "Trazer o telemóvel no bolso pode prejudicar a qualidade do esperma, diz novo estudo",
        "link": "https://pplware.sapo.pt/ciencia/trazer-o-telemovel-no-bolso-pode-prejudicar-a-qualidade-do-esperma-diz-novo-estudo/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/smartphone_testiculos00.webp",
        "category": "saúde"
    },
    {
        "title": "Saúde social, confidencialidade e redes de solidão",
        "link": "https://www.b9.com.br/171437/saude-social-confidencialidade-e-redes-de-solidao/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/blindfold.jpg",
        "category": "saúde"
    },
    {
        "title": "Saúde: cientistas alertam para nova ameaça global",
        "link": "https://olhardigital.com.br/2025/04/01/medicina-e-saude/saude-cientistas-alertam-para-nova-ameaca-global/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/08/mpox-1.jpg",
        "category": "saúde"
    },
    {
        "title": "Farmacêuticos poderão prescrever remédios; entidades contestam",
        "link": "https://olhardigital.com.br/2025/03/20/medicina-e-saude/farmaceuticos-poderao-prescrever-remedios-entidades-contestam/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/iStock-1491276743.jpg",
        "category": "saúde"
    },
    {
        "title": "Por que os animais comem seu próprio cocô e o de outros animais também?",
        "link": "https://olhardigital.com.br/2025/03/17/ciencia-e-espaco/por-que-os-animais-comem-seu-proprio-coco-e-o-de-outros-animais-tambem/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/cachorro-comendo-grama-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Comer devagar é mais importante para a saúde do que você imagina",
        "link": "https://olhardigital.com.br/2025/04/01/medicina-e-saude/comer-devagar-e-mais-importante-para-a-saude-do-que-voce-imagina/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/comendo1.jpg",
        "category": "saúde"
    },
    {
        "title": "Nísia deixa o cargo, mas não sem antes desabafar na frente de Lula",
        "link": "https://veja.abril.com.br/coluna/radar/nisia-deixa-o-cargo-mas-nao-sem-antes-desabafar-na-frente-de-lula",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-10-at-15.56.39.jpeg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "saúde"
    },
    {
        "title": "OMS alerta: escassez de medicamentos para HIV pode causar milhões de mortes",
        "link": "https://olhardigital.com.br/2025/03/18/medicina-e-saude/oms-alerta-escassez-de-medicamentos-para-hiv-pode-causar-milhoes-de-mortes/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/HIV-tratamento.jpg",
        "category": "saúde"
    },
    {
        "title": "Galaxy Watch 7 fica 47% mais barato em oferta na Amazon",
        "link": "https://tecnoblog.net/achados/galaxy-watch-7-fica-47-mais-barato-em-oferta-na-amazon/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2024/12/galaxy-watch-7-achado-dia.jpg",
        "category": "saúde"
    },
    {
        "title": "Nova lista de vírus e bactérias procura preparar os cientistas para uma próxima pandemia",
        "link": "https://pplware.sapo.pt/ciencia/nova-lista-de-virus-e-bacterias-procura-preparar-os-cientistas-para-uma-proxima-pandemia/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2024/01/ciencia_virus-1.jpg",
        "category": "saúde"
    },
    {
        "title": "Astronautas devem passar por programa de reabilitação após meses no espaço",
        "link": "https://olhardigital.com.br/2025/03/19/ciencia-e-espaco/astronautas-devem-passar-por-programa-de-reabilitacao-apos-meses-no-espaco/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/astronautas-presos-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Estudo: forma como o café é preparado faz muita diferença na sua saúde",
        "link": "https://olhardigital.com.br/2025/03/31/medicina-e-saude/estudo-forma-como-o-cafe-e-preparado-faz-muita-diferenca-na-sua-saude/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/08/Destaque-Cafe-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Como IA e tecnologia estão transformando a saúde na Amazônia",
        "link": "https://www.b9.com.br/171512/como-ia-e-tecnologia-estao-transformando-a-saude-na-amazonia/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/amazoni.jpg",
        "category": "saúde"
    },
    {
        "title": "Apple Watch e mais smartwatches com até 57% de desconto na Semana do Consumidor",
        "link": "https://tecnoblog.net/achados/apple-watch-e-mais-smartwatches-com-ate-57-de-desconto-na-semana-do-consumidor/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2025/03/Apple-Watch-Ultra-2-no-pulso-Foto-Thassius-VelosoTecnoblog.png",
        "category": "saúde"
    },
    {
        "title": "Problemas com saúde mental? O tratamento pode estar perto",
        "link": "https://www.tecmundo.com.br/ciencia/403437-problemas-com-saude-mental-o-tratamento-pode-estar-perto.htm",
        "image": "https://tm.ibxk.com.br/2025/03/19/19164108442002.jpg?ims=1200xorig",
        "category": "saúde"
    },
    {
        "title": "Como e por que acontecem incêndios florestais?",
        "link": "https://olhardigital.com.br/2025/03/23/ciencia-e-espaco/como-e-por-que-acontecem-incendios-florestais/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/01/Destaque-Incendios-em-Los-Angeles-13-de-janeiro-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "A herança genética do trauma: estudo revela o impacto na violência no DNA",
        "link": "https://www.tecmundo.com.br/ciencia/403285-a-heranca-genetica-do-trauma-estudo-revela-o-impacto-na-violencia-no-dna.htm",
        "image": "https://tm.ibxk.com.br/2025/03/13/13101252223074.jpg?ims=1200xorig",
        "category": "saúde"
    },
    {
        "title": "Vitamina B12 e cérebro: estudo alerta para possível impacto na saúde cognitiva",
        "link": "https://olhardigital.com.br/2025/03/21/medicina-e-saude/vitamina-b12-e-cerebro-estudo-alerta-para-possivel-impacto-na-saude-cognitiva/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/shutterstock_385316287.jpg",
        "category": "saúde"
    },
    {
        "title": "Como a Apple quer criar um “médico virtual” usando IA no iPhone",
        "link": "https://olhardigital.com.br/2025/03/30/pro/como-a-apple-quer-criar-um-medico-virtual-usando-ia-no-iphone/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/shutterstock_2126141624-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Poeira tóxica de Marte pode ameaçar a saúde dos astronautas",
        "link": "https://olhardigital.com.br/2025/03/28/ciencia-e-espaco/poeira-toxica-de-marte-pode-ameacar-a-saude-dos-astronautas/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/poeira-marte-scaled.jpg",
        "category": "saúde"
    },
    {
        "title": "Saúde do oceano depende do… xixi das baleias!",
        "link": "https://olhardigital.com.br/2025/03/11/ciencia-e-espaco/saude-do-oceano-depende-do-xixi-das-baleias/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/01/baleia-jubarte-scaled-e1741712048484.jpg",
        "category": "saúde"
    },
    {
        "title": "A nova fronteira da saúde: você está cuidando da sua saúde social?",
        "link": "https://www.b9.com.br/171280/a-nova-fronteira-da-saude-voce-esta-cuidando-da-sua-saude-social/",
        "image": "https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2025/03/Kasley-Killim_SXSW.jpeg?fit=1920%2C1080&ssl=1",
        "category": "saúde"
    },
    {
        "title": "Maioria da população mundial respira ar sujo, diz relatório",
        "link": "https://olhardigital.com.br/2025/03/11/ciencia-e-espaco/maioria-da-populacao-mundial-respira-ar-sujo-diz-relatorio/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2024/07/poluicao-1.jpg",
        "category": "saúde"
    },

    {
        "title": "A política em modo spinumvivoflatico",
        "link": "https://observador.pt/opiniao/a-politica-em-modo-spinumvivoflatico/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A2730%3A2730%3Anowe%3A683%3A0%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2024%2F04%2F05142127%2Fjporfirio-eu-estive-la-maria-joao-avillez-helena-matos-01-5-scaled.jpg",
        "category": "política"
    },
    {
        "title": "OpenAI quer proteção contra leis estaduais nos EUA – e faz proposta a Trump",
        "link": "https://olhardigital.com.br/2025/03/14/pro/openai-quer-protecao-contra-leis-estaduais-nos-eua-e-faz-proposta-a-trump/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/12/openAI_-.jpg",
        "category": "política"
    },
    {
        "title": "Articuladora política de Lula, Gleisi detona quatro governadores nas redes",
        "link": "https://veja.abril.com.br/coluna/radar/articuladora-politica-de-lula-gleisi-detona-quatro-governadores-nas-redes",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/0d9a4616.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Espanha reduz limite de álcool na condução! E Portugal?",
        "link": "https://pplware.sapo.pt/motores/espanha-reduz-limite-de-alcool-na-conducao-e-portugal/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/conduzir_00.jpg",
        "category": "política"
    },
    {
        "title": "Quatro ideias erradas sobre política",
        "link": "https://observador.pt/opiniao/quatro-ideias-erradas-sobre-politica/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A528%3A528%3Anowe%3A44%3A72%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2024%2F12%2F06182734%2Fbentes-penedo-1.jpeg",
        "category": "política"
    },
    {
        "title": "A feitura política do disparate",
        "link": "https://observador.pt/opiniao/a-feitura-politica-do-disparate/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A467%3A467%3Anowe%3A200%3A151%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2023%2F01%2F11210135%2Fbruno-campos-17.jpg",
        "category": "política"
    },
    {
        "title": "SXSW 2025: Tecnologia é política",
        "link": "https://www.b9.com.br/171349/sxsw-2025-tecnologia-e-politica/",
        "image": "https://assets.b9.com.br/wp-content/uploads/2025/03/amywebb1.jpg",
        "category": "política"
    },
    {
        "title": "Google traz novos bloqueios ao YouTube! Depois da publicidade, o alvo é o download de vídeos",
        "link": "https://pplware.sapo.pt/google/google-traz-bloqueios-ao-youtube-depois-da-publicidade-o-alvo-e-o-download-de-videos/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/youtube_download_video_bloqueio_1.jpg",
        "category": "política"
    },
    {
        "title": "Galaxy S20 e mais: veja os celulares da Samsung que NÃO vão receber atualização em 2025",
        "link": "https://olhardigital.com.br/2025/03/12/reviews/galaxy-s20-e-mais-veja-os-celulares-da-samsung-que-nao-vao-receber-atualizacao-em-2025/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/S20.png",
        "category": "política"
    },
    {
        "title": "Baidu: gigante chinesa lança IA para concorrer com a DeepSeek",
        "link": "https://olhardigital.com.br/2025/03/17/pro/baidu-gigante-chinesa-lanca-ia-para-concorrer-com-a-deepseek/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/02/baidu.jpg",
        "category": "política"
    },
    {
        "title": "Moral e política do petróleo",
        "link": "https://veja.abril.com.br/coluna/cristovam-buarque/moral-e-politica-do-petroleo",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/02/lula-marina-silva.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Apelo a Trump, tensão política no Brasil, perdão presidencial: o que imprensa internacional disse sobre Bolsonaro réu",
        "link": "https://www.bbc.com/portuguese/articles/c62zp0djm3yo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/e10d/live/a6bc0e60-0aeb-11f0-bf59-3b6bbdd820ea.jpg",
        "category": "política"
    },
    {
        "title": "As mulheres mudam a política? (2)",
        "link": "https://observador.pt/opiniao/as-mulheres-mudam-a-politica-2/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A467%3A467%3Anowe%3A0%3A0%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2019%2F03%2F20170446%2Fpatricia-fernandes_ubi_003_websitejoaopedrosilva_467x467_acf_cropped.jpg",
        "category": "política"
    },
    {
        "title": "YouTube: Google proíbe propagandas de jogos de azar não certificados",
        "link": "https://tecnoblog.net/noticias/youtube-google-proibe-propagandas-de-jogos-de-azar-nao-certificados/",
        "image": "https://files.tecnoblog.net/wp-content/uploads/2022/05/youtube_capa-2_tb-1536x864.png",
        "category": "política"
    },
    {
        "title": "Trump faz dólar cair no mundo e ajuda Brasil, mas política doméstica limita queda",
        "link": "https://veja.abril.com.br/economia/trump-faz-dolar-cair-no-mundo-e-ajuda-brasil-mas-politica-domestica-limita-queda",
        "image": "https://veja.abril.com.br/wp-content/uploads/2022/06/vista-superior-da-pilha-de-notas-de-cinco-dolares-dos-estados-unidos_76000-8346.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Anielle sai em defesa de Marina Silva: impossível normalizar violência política que atinge mulheres no Brasil",
        "link": "https://veja.abril.com.br/politica/anielle-sai-em-defesa-de-marina-silva-impossivel-normalizar-violencia-politica-que-atinge-mulheres-no-brasil",
        "image": "https://veja.abril.com.br/wp-content/uploads/2023/04/anielle-franco.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Apoio à compra de carro elétrico: pode receber até 4 mil euros",
        "link": "https://pplware.sapo.pt/motores/apoio-a-compra-de-carro-eletrico-pode-receber-ate-4-mil-euros/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/mitos_eletricos00.webp",
        "category": "política"
    },
    {
        "title": "COP30: política ambiental do Brasil é alvo de críticas",
        "link": "https://olhardigital.com.br/2025/03/24/pro/cop30-politica-ambiental-do-brasil-e-alvo-de-criticas/",
        "image": "https://olhardigital.com.br/wp-content/uploads/2025/03/cop30-1.jpg",
        "category": "política"
    },
    {
        "title": "Impacto Social: Refém da Política?",
        "link": "https://observador.pt/opiniao/impacto-social-refem-da-politica/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A467%3A467%3Anowe%3A0%3A17%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2024%2F08%2F12141423%2Fines.jpg",
        "category": "política"
    },
    {
        "title": "Política e sorte",
        "link": "https://veja.abril.com.br/coluna/murillo-de-aragao/politica-e-sorte",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/02/lula-agencia-brasil-donald-trump-afp.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Política de alto nivel.",
        "link": "https://finofilipino.org/politica-de-alto-nivel-4/",
        "image": "https://finofilipino.org/wp-content/uploads/2025/03/wergeryjrtyuj.jpg",
        "category": "política"
    },
    {
        "title": "Janones diz que Gayer acionou STF contra ele por acusação de assassinato",
        "link": "https://veja.abril.com.br/coluna/radar/janones-diz-que-gayer-acionou-stf-contra-ele-por-acusacao-de-assassinato",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/gayer-2-1.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Marcelo podia ter evitado a crise política?",
        "link": "https://observador.pt/programas/explicador/marcelo-podia-ter-evitado-a-crise-politica/",
        "image": "https://bordalo.observador.pt/v2/rs:fill:770:403/c:770:433:nowe:0:0/q:70/f:webp/plain/https://s3.observador.pt/wp-content/uploads/2019/09/24112758/770-podcast-explicador.png",
        "category": "política"
    },
    {
        "title": "'A crueldade parece ser o princípio central da política de hoje'",
        "link": "https://www.bbc.com/portuguese/articles/clyr58rvz4xo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/e977/live/99fb8730-ef13-11ef-a858-573cd9384594.jpg",
        "category": "política"
    },
    {
        "title": "Vitória define política de ingressos para jogos do Brasileirão",
        "link": "https://www.terra.com.br/esportes/vitoria/vitoria-define-politica-de-ingressos-para-jogos-do-brasileirao,223929256fd8e597439d8e1c50ddd670hw3wahjl.html",
        "image": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2025/03/19/372018029-54374553985e620ff836ek.jpg",
        "category": "política"
    },
    {
        "title": "Teólogo lança livro sobre polarização política na igreja evangélica",
        "link": "https://veja.abril.com.br/coluna/radar/teologo-lanca-livro-sobre-polarizacao-politica-na-igreja-evangelica/",
        "image": "https://veja.abril.com.br/wp-content/uploads/2025/03/IgrejaPolarizada.png?crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "A política do conclave",
        "link": "https://observador.pt/opiniao/a-politica-do-conclave/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A467%3A467%3Anowe%3A0%3A0%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2015%2F10%2Ffoto_jaimepinto.jpg",
        "category": "política"
    },
    {
        "title": "Bolsonaro convoca manifestação contra ‘vingança política’",
        "link": "https://veja.abril.com.br/brasil/bolsonaro-convoca-manifestacao-contra-vinganca-politica",
        "image": "https://veja.abril.com.br/wp-content/uploads/2024/02/GettyImages-2031354807-e1709155608858.jpg?quality=70&strip=info&crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Montenegro: o único responsável pela crise política?",
        "link": "https://observador.pt/programas/e-o-vencedor-e/montenegro-o-unico-responsavel-pela-crise-politica/",
        "image": "https://bordalo.observador.pt/v2/rs:fill:770:403/c:770:433:nowe:0:0/q:70/f:webp/plain/https://s3.observador.pt/wp-content/uploads/2021/04/13110132/770-podcast-e-o-vencedor-e.jpg",
        "category": "política"
    },
    {
        "title": "Funcionário da Tesla que criticou Elon Musk é demitido",
        "link": "https://olhardigital.com.br/2025/03/02/pro/funcionario-da-tesla-que-criticou-elon-musk-e-demitido/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/02/musk.jpg",
        "category": "política"
    },
    {
        "title": "OpenAI apela à proibição da DeepSeek e dos modelos de IA chineses! Será medo?",
        "link": "https://pplware.sapo.pt/inteligencia-artificial/openai-apela-a-proibicao-da-deepseek-e-dos-modelos-de-ia-chineses-sera-medo/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2025/03/openai_deepseek.webp",
        "category": "política"
    },
    {
        "title": "“Luís Montenegro é responsável da crise política”",
        "link": "https://observador.pt/programas/explicador/luis-montenegro-e-responsavel-da-crise-politica/",
        "image": "https://bordalo.observador.pt/v2/rs:fill:770:403/c:770:433:nowe:0:0/q:70/f:webp/plain/https://s3.observador.pt/wp-content/uploads/2025/01/29161324/770-podcast-explicador-bva-pf.jpg",
        "category": "política"
    },
    {
        "title": "Governo mantém na gaveta projeto contra militares na política",
        "link": "https://veja.abril.com.br/coluna/jose-casado/governo-mantem-na-gaveta-projeto-contra-militares-na-politica/",
        "image": "https://veja.abril.com.br/wp-content/uploads/2024/07/monumento_tortura_nunca_mais_homenagem_as_vitimas_da_ditadura_militar_de_1964-1985_statues_in_recife_brazil1.webp?crop=1&resize=1080,565",
        "category": "política"
    },
    {
        "title": "Estações de carregamento da Tesla são incendiadas em ato de vandalismo",
        "link": "https://olhardigital.com.br/2025/03/06/pro/estacoes-de-carregamento-da-tesla-sao-incendiadas-em-ato-de-vandalismo/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/carregamento-tesla.jpg",
        "category": "política"
    },
    {
        "title": "Como as ameaças de Trump estão mudando tudo na política do Canadá",
        "link": "https://www.bbc.com/portuguese/articles/czed6dd6g1go",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/5edd/live/33ce1340-fd02-11ef-896e-d7e7fb1719a4.jpg",
        "category": "política"
    },
    {
        "title": "Carros da Tesla sem descanso… 44 pneus roubados num parque de estacionamento!",
        "link": "https://pplware.sapo.pt/motores/carros-da-tesla-sem-descanso-44-pneus-roubados-num-parque-de-estacionamento/",
        "image": "https://pplware.sapo.pt/wp-content/uploads/2024/07/tesla_carro_1.jpg",
        "category": "política"
    },
    {
        "title": "IA e Política",
        "link": "https://observador.pt/opiniao/ia-e-politica/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A467%3A467%3Anowe%3A0%3A0%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2018%2F09%2F14095447%2Fleonel_moura_geek_467x467_acf_cropped.jpg",
        "category": "política"
    },
    {
        "title": "Apontamentos sobre a crise política",
        "link": "https://observador.pt/opiniao/apontamentos-sobre-a-crise-politica/",
        "image": "https://wm.observador.pt/wm-op/wide-circle/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A900%2Fc%3A1378%3A1378%3Anowe%3A661%3A0%2Fq%3A70%2Ff%3Awebp%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2021%2F11%2F25185855%2F20211125filipeamorim2988.jpg",
        "category": "política"
    },
    {
        "title": "Artemis não é suficiente para bater a China, dizem especialistas",
        "link": "https://olhardigital.com.br/2025/03/12/ciencia-e-espaco/artemis-nao-e-suficiente-para-bater-a-china-dizem-especialistas/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2025/03/Captura-de-tela-2025-03-11-191405.png",
        "category": "política"
    },
    {
        "title": "Apoio de Trump não impede queda nas vendas da Tesla",
        "link": "https://olhardigital.com.br/2025/03/17/carros-e-tecnologia/apoio-de-trump-nao-impede-queda-nas-vendas-da-tesla/",
        "image": "https://img.odcdn.com.br/wp-content/uploads/2024/07/Tesla-e17.jpg",
        "category": "política"
    },
    {
        "title": "Marine Le Pen, de herdeira política a dúvida nas eleições presidenciais da França em 2027",
        "link": "https://www.bbc.com/portuguese/articles/c230kngj00yo",
        "image": "https://ichef.bbci.co.uk/news/1024/branded_portuguese/f9f0/live/2b2a1f10-0e62-11f0-b9e7-859c4282fe02.jpg",
        "category": "política"
    }
]

document.querySelectorAll('header nav button').forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.textContent.toLowerCase();
        getNoticias(categoria);
    });
});

async function getNoticias(query) {
    try {


        //esconder api key depois
        // const apiKey = '85b93d6b74ff446ea6f1e9b43b091cd7';
        // const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=pt&apiKey=${apiKey}`;

        // const response = await fetch(url);
        // const data = await response.json();

        // if (data.status !== "ok") {
        //     console.error('Erro na resposta da API:', data);
        //     return;
        // }

        // if (!data.articles) {
        //     console.error('Nenhuma notícia encontrada na resposta:', data);
        //     return;
        // }

        // // dados que vamos consumir da api
        // const noticias = data.articles.map(article => ({
        //     title: article.title,
        //     link: article.url,
        //     image: article.urlToImage,
        //     category: query
        // }));

        const noticias = articles
            .filter(article => query === "todas" || article.category === query)
            .map(article => ({
                title: article.title,
                link: article.link,
                image: article.image,
                category: article.category
            }));


        if (query === "todas") {
            todasNoticias = noticias;
            noticiasFiltradas = [...todasNoticias];  // carrega todas as noticias
        } else {
            noticiasFiltradas = noticias;  // carrega noticia do filtro selecionado
        }

        if (query === "todas") {
            todasNoticias = noticias;
            noticiasFiltradas = [...todasNoticias];  // carrega todas as noticias
        } else {
            noticiasFiltradas = noticias;  // carrega noticia do filtro selecionado
        }

        embaralhaNoticia();  // carrega noticia aleatoria ao trocar de categoria
        index = 0;
        renderizaNoticias();  // renderiza as noticias filtradas
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}


// função pra renderizar noticia

function renderizaNoticias() {
    const noticiasContainer = document.getElementById("noticias");
    noticiasContainer.innerHTML = '';

    // verifica se tem noticia filtrada
    if (noticiasFiltradas.length === 0) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    // verifica se o indice esta dentro das noticias filtradas
    const noticia = noticiasFiltradas[index];
    if (!noticia) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticia");

    noticiaElement.innerHTML = `
        <a href="${noticia.link}" target="_blank">
            <img src="${noticia.image}" alt="Imagem da notícia">
            <h2>${noticia.title}</h2>
        </a>
    `;
    noticiasContainer.appendChild(noticiaElement);
}

// função pra carregar noticias aleatoriamente
function embaralhaNoticia() {
    for (let i = noticiasFiltradas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [noticiasFiltradas[i], noticiasFiltradas[j]] = [noticiasFiltradas[j], noticiasFiltradas[i]];
    }
}

// Adiciona os event listeners para navegação entre notícias
document.getElementById("prevNews").addEventListener("click", () => {
    index = (index - 1 + noticiasFiltradas.length) % noticiasFiltradas.length;  // noticia anterior
    renderizaNoticias();
});

document.getElementById("nextNews").addEventListener("click", () => {
    index = (index + 1) % noticiasFiltradas.length;  // proxima noticia
    renderizaNoticias();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcone = document.querySelector(".menu-icone");
    const menuPc = document.querySelector(".menu-pc");

    // Alterna a visibilidade do menu
    menuIcone.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que o clique no botão feche o menu imediatamente
        menuPc.style.display = (menuPc.style.display === "flex") ? "none" : "flex";
    });

    // Fecha o menu ao clicar em qualquer botão dentro dele
    document.querySelectorAll(".menu-pc button").forEach(button => {
        button.addEventListener("click", function () {
            menuPc.style.display = "none";
        });
    });

    // Fecha o menu ao clicar fora dele, mas ignora o ícone de menu
    document.addEventListener("click", function (event) {
        if (!menuPc.contains(event.target) && event.target !== menuIcone && !menuIcone.contains(event.target)) {
            menuPc.style.display = "none";
        }
    });
});

getNoticias('todas');