# Formulario-multipasso

Formulario-multipasso é um exemplo simples de formulário multi-etapas (wizard) construído com React e Vite. O objetivo do projeto é demonstrar padrões comuns de UX para formulários: navegação entre passos, indicador de progresso, gerenciamento de estado via hook customizado e envio final.

## Recursos

- Navegação entre etapas (Avançar / Voltar)
- Indicador visual de progresso com ícones (Steps)
- Hook customizado `useForm` para controlar o step atual e o componente exibido
- Componentes modulares: `UserForm`, `ReviewForm`, `Obrigado`
- Projeto leve, ideal para aprendizado e demonstração

## Tecnologias

- React 19
- Vite
- react-icons
- CSS simples para estilos

## Como executar

1. Clone o repositório:
	- git clone <URL-do-repo>
2. Acesse a pasta do projeto:
	- cd vite-project
3. Instale as dependências:
	- npm install
4. Rode em modo desenvolvimento:
	- npm run dev
5. Abra o endereço mostrado pelo Vite (por exemplo http://localhost:5173)

## Estrutura principal

- `vite-project/src/components/` — componentes do formulário (UserForm, ReviewForm, Steps, Obrigado)
- `vite-project/src/hooks/useForm.jsx` — hook para gerenciar passos e componente atual
- `vite-project/src/App.jsx` — integra os componentes e controla o fluxo


