# Bible API in GitHub 🇸🇦 🇨🇳 🇩🇪 🇬🇷 🇺🇸 🇬🇧 🇺🇳 🇪🇸 🇫🇮 🇫🇷 🇰🇷 🇧🇷 🇵🇹 🇷🇴 🇷🇺 🇻🇳

## Description

This repository provides a simple API to access verses from the Almeida Revista e Corrigida (ARC) Bible directly from GitHub. The verses are available in JSON format.

# Postman

Check out the API versions here: [API on Postman](https://documenter.getpostman.com/view/11242574/2sA3Qy7VeH)

# Endpoints

## Bible

To access the Bible translations, use the following endpoint:

```
https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/{language}/{bible-version}.json
```

### Try:
```sh
curl https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/pt-br/arc.json
```

## Books

To access specific books within a Bible version, use this endpoint:

```
https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/{language}/{bible-version}/{book-id}/{book-id}.json
```

### Try:
```sh
curl https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/pt-br/arc/genesis/genesis.json
```

## Chapter and Verse

To access specific chapters and verses within a book, use the following endpoint:

```
https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/{language}/{bible-version}/{book-id}/{chapter}/{verse}.json
```

### Try:
```sh
curl https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/versions/pt-br/arc/2corintios/2/1.json
```

## Index

To get all available Bible versions and books, use this endpoint:

```
https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/sumary/index.json
```

### Try:
```sh
curl https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/sumary/index.json
```

## Summary

To get a summary of all available Bible versions and books, use this endpoint:

```
https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/sumary/ids.json
```

### Try:
```sh
curl https://raw.githubusercontent.com/maatheusgois/biblia/feature/add-english-versions/sumary/ids.json
```

## Languages and Versions

The summary endpoint provides an overview of available languages and versions. For detailed information, refer to the specific endpoints provided above.

### Arabic 🇸🇦
| Language ID | Version Name         | Version ID |
|-------------|----------------------|------------|
| ar          | The Arabic Bible     | svd        |

### Chinese 🇨🇳
| Language ID | Version Name              | Version ID |
|-------------|---------------------------|------------|
| zh          | Chinese Union Version     | cuv        |
| zh          | New Chinese Version       | ncv        |

### German 🇩🇪
| Language ID | Version Name    | Version ID |
|-------------|-----------------|------------|
| de          | Schlachter      | schlachter |

### Greek 🇬🇷
| Language ID | Version Name | Version ID |
|-------------|--------------|------------|
| el          | Modern Greek | greek      |

### English 🇺🇸🇬🇧
| Language ID | Version Name          | Version ID |
|-------------|-----------------------|------------|
| en          | Basic English         | bbe        |
| en          | King James Version    | kjv        |

### Esperanto 🇺🇳
| Language ID | Version Name | Version ID |
|-------------|--------------|------------|
| eo          | Esperanto    | esperanto  |

### Spanish 🇪🇸
| Language ID | Version Name  | Version ID |
|-------------|---------------|------------|
| es          | Reina Valera  | rvr        |

### Finnish 🇫🇮
| Language ID | Version Name    | Version ID |
|-------------|-----------------|------------|
| fi          | Finnish Bible   | finnish    |
| fi          | Pyhä Raamattu   | pr         |

### French 🇫🇷
| Language ID | Version Name        | Version ID |
|-------------|---------------------|------------|
| fr          | Le Bible de I'Épée  | apee       |

### Korean 🇰🇷
| Language ID | Version Name | Version ID |
|-------------|--------------|------------|
| ko          | Korean Version | ko       |

### Portuguese 🇧🇷🇵🇹
| Language ID | Version Name                         | Version ID |
|-------------|--------------------------------------|------------|
| pt-br       | Almeida Revisada Imprensa Bíblica    | aa         |
| pt-br       | Almeida Corrigida e Revisada Fiel    | acf        |
| pt-br       | Nova Versão Internacional            | nvi        |

### Romanian 🇷🇴
| Language ID | Version Name                    | Version ID |
|-------------|---------------------------------|------------|
| ro          | Versiunea Dumitru Cornilescu    | cornilescu |

### Russian 🇷🇺
| Language ID | Version Name        | Version ID |
|-------------|---------------------|------------|
| ru          | Синодальный перевод | synodal    |

### Vietnamese 🇻🇳
| Language ID | Version Name | Version ID |
|-------------|--------------|------------|
| vi          | Tiếng Việt   | vietnamese |

## IDs das Versões

A tabela abaixo lista os IDs e nomes das versões disponíveis na API:

|-----------|-----------------------------|
| ID | Versão |
|-----------|-----------------------------|
| aa | Almeida Atualizada |
| acf | Almeida Corrigida Fiel |
| arc | Almeida Revista e Corrigida |
| kja | King James Atualizada |
| nvi | Nova Versão Internacional |

## IDs dos Livros

A tabela abaixo lista os IDs e nomes dos livros disponíveis na API:

| ID               | Nome                    |
| ---------------- | ----------------------- |
| genesis          | Gênesis                 |
| exodo            | Êxodo                   |
| levitico         | Levítico                |
| numeros          | Números                 |
| deuteronomio     | Deuteronômio            |
| josue            | Josué                   |
| juizes           | Juízes                  |
| rute             | Rute                    |
| 1samuel          | 1 Samuel                |
| 2samuel          | 2 Samuel                |
| 1reis            | 1 Reis                  |
| 2reis            | 2 Reis                  |
| 1cronicas        | 1 Crônicas              |
| 2cronicas        | 2 Crônicas              |
| esdras           | Esdras                  |
| neemias          | Neemias                 |
| ester            | Ester                   |
| jo               | Jó                      |
| salmos           | Salmos                  |
| proverbios       | Provérbios              |
| eclesiastes      | Eclesiastes             |
| canticos         | Cânticos                |
| isaias           | Isaías                  |
| jeremias         | Jeremias                |
| lamentacoes      | Lamentações de Jeremias |
| ezequiel         | Ezequiel                |
| daniel           | Daniel                  |
| oseias           | Oséias                  |
| joel             | Joel                    |
| amos             | Amós                    |
| obadias          | Obadias                 |
| jonas            | Jonas                   |
| miqueias         | Miquéias                |
| naum             | Naum                    |
| habacuque        | Habacuque               |
| sofonias         | Sofonias                |
| ageu             | Ageu                    |
| zacarias         | Zacarias                |
| malaquias        | Malaquias               |
| mateus           | Mateus                  |
| marcos           | Marcos                  |
| lucas            | Lucas                   |
| joao             | João                    |
| atos             | Atos                    |
| romanos          | Romanos                 |
| 1corintios       | 1 Coríntios             |
| 2corintios       | 2 Coríntios             |
| galatas          | Gálatas                 |
| efesios          | Efésios                 |
| filipenses       | Filipenses              |
| colossenses      | Colossenses             |
| 1tessalonicenses | 1 Tessalonicenses       |
| 2tessalonicenses | 2 Tessalonicenses       |
| 1timoteo         | 1 Timóteo               |
| 2timoteo         | 2 Timóteo               |
| tito             | Tito                    |
| filemom          | Filemom                 |
| hebreus          | Hebreus                 |
| tiago            | Tiago                   |
| 1pedro           | 1 Pedro                 |
| 2pedro           | 2 Pedro                 |
| 1joao            | 1 João                  |
| 2joao            | 2 João                  |
| 3joao            | 3 João                  |
| judas            | Judas                   |
| apocalipse       | Apocalipse              |

# Formatando

```sh
npx prettier --write .
```

## Contribuindo

Este repositório está aberto a contribuições. Sinta-se à vontade para propor melhorias ou adicionar novos recursos. Para contribuir, por favor, envie um pull request com suas alterações.

Se encontrar algum problema ou tiver alguma sugestão, abra uma issue para discutirmos.

## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE).
