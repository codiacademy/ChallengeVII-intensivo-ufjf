'use client';
export default function LoginPage() {
  return (
    <html>
      <body>
        
<main>
      <div className="header">
        <h1>LOGO | Usuário</h1>
      </div>
      <div className="container">

        <div className="sidebar">
          <button id="btnDashboard" data-content="dashboard-section" className="active">Dashboard</button>
          <button id="btnVisualizar" data-content="visualizar-section">Visualizar</button>
          <button id="btnSalvar" data-content="salvar-section">Salvar</button>
          <button id="btnEstatisticas" data-content="estatisticas-section">Estatísticas</button>
          <button id="btnGraficos" data-content="graficos-section">Gráficos</button>
        </div>
        <div className="main-content">
          <div id="dashboard-section" className="content-section active">
            <div className="grid">
              <div style={{backgroundColor: '#a3d1ff'}}>Resumo Diário</div>
              <div style={{backgroundColor: '#a3d1ff'}}>Tarefas Pendentes</div>
              <div style={{backgroundColor: '#a3d1ff'}}>Notificações</div>
              <div style={{backgroundColor: '#a3d1ff'}}>Eventos Próximos</div>
              <div style={{backgroundColor: '#a3d1ff'}}>Alertas</div>
              <div style={{backgroundColor: '#a3d1ff'}}>Atividade Recente</div>
            </div>
            <div className="chart" style={{backgroundColor: '#a3d1ff', marginTop: '20px'}}>
              <h2>Dashboard: Comparativo Receita x Despesa</h2>
              <p>Aqui você veria um gráfico de resumo com dados importantes do seu negócio.</p>
              <div style={{height: '180px'}}>Gráfico de Barras/Pizza</div>
            </div>
            <div className="form" style={{backgroundColor: '#a3d1ff', marginTop: '20px'}}>
              <h2>Dashboard: Últimas Atividades</h2>
              <ul>
                <li><p>Registro X atualizado em 15/05/2025</p></li>
                <li><p>Novo cliente adicionado: Empresa Y</p></li>
                <li><p>Relatório Z gerado</p></li>
              </ul>
            </div>
            <div className="table" style={{backgroundColor: '#a3d1ff', marginTop: '20px'}}>
              <h2>Dashboard: Indicadores Chave</h2>
              <table>
                <thead>
                  <tr>
                    <th>KPI</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Receita Total</td>
                    <td>R$ 15.000</td>
                  </tr>
                  <tr>
                    <td>Despesa Total</td>
                    <td>R$ 8.000</td>
                  </tr>
                  <tr>
                    <td>Lucro Bruto</td>
                    <td>R$ 7.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="visualizar-section" className="content-section">
            <div className="table" style={{backgroundColor: '#ffb6c1', padding: '20px'}}>
              <h2>Visualizar: Lista de Registros</h2>
              <p>Aqui você pode ver uma tabela completa com todos os itens, clientes, produtos, etc.</p>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>001</td>
                    <td>Item A</td>
                    <td>Ativo</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Item B</td>
                    <td>Pendente</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>Item C</td>
                    <td>Concluído</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Item D</td>
                    <td>Ativo</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                  </tr>
                </tbody>
              </table>
              <button style={{backgroundColor: '#d1a3ff', color: 'white', border: 'none', padding: '8px 15px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px'}}>Adicionar Novo</button>
              <button style={{backgroundColor: '#d1a3ff', color: 'white', border: 'none', padding: '8px 15px', marginTop: '10px', cursor: 'pointer', borderRadius: '4px'}}>Filtrar</button>
            </div>
            <div className="chart" style={{backgroundColor: '#ffb6c1', marginTop: '20px', padding: '20px'}}>
              <h2>Visualizar: Detalhes do Item Selecionado</h2>
              <p>Área para exibir detalhes de um registro específico ao selecioná-lo na tabela acima.</p>
              <div style={{height: '150px'}}>Detalhes do Item</div>
            </div>
          </div>
          <div id="salvar-section" className="content-section">
            <div className="form" style={{backgroundColor: '#c1ffb6', padding: '20px'}}>
              <h2>Salvar: Formulário de Cadastro</h2>
              <form>

                <label htmlFor="nomeSalvar">Nome:</label>
                <input type="text" id="nomeSalvar" name="nome" placeholder="Digite o nome completo" required />

                <label htmlFor="emailSalvar">E-mail:</label>
                <input type="email" id="emailSalvar" name="email" placeholder="nome@example.com" required />

                <label htmlFor="telefoneSalvar">Telefone:</label>
                <input type="text" id="telefoneSalvar" name="telefone" placeholder="(XX) XXXXX-XXXX" />

                <label htmlFor="descricaoSalvar">Observações:</label>
                <textarea id="descricaoSalvar" name="descricao" rows="4" placeholder="Alguma observação adicional..."></textarea>

                <button type="submit">Salvar Registro</button>
              </form>

            </div>
            <div className="chart" style={{backgroundColor: '#c1ffb6', marginTop: '20px', padding: '20px'}}>
              <h2>Salvar: Feedback</h2>
              <p>Mensagens de sucesso ou erro aparecerão aqui após tentar salvar os dados.</p>
            </div>
          </div>
          <div id="estatisticas-section" className="content-section">
            <div className="chart" style={{backgroundColor: '#ffd7b6', padding: '20px'}}>
              <h2>Estatísticas: Vendas Mensais</h2>
              <p>Um gráfico de linha mostrando a evolução das vendas ao longo dos meses.</p>
              <div style={{height: '200px'}}>Gráfico de Vendas</div>
            </div>
            <div className="grid" style={{marginTop: '20px'}}>
              <div style={{backgroundColor: '#ffd7b6'}}>Média de Vendas: R$ 5.000</div>
              <div style={{backgroundColor: '#ffd7b6'}}>Clientes Ativos: 1.200</div>
              <div style={{backgroundColor: '#ffd7b6'}}>Produtos Vendidos: 350</div>
              <div style={{backgroundColor: '#ffd7b6'}}>Taxa de Conversão: 2.5%</div>
              <div style={{backgroundColor: '#ffd7b6'}}>Ticket Médio: R$ 80</div>
              <div style={{backgroundColor: '#ffd7b6'}}>Melhor Mês: Junho</div>
            </div>
            <div className="table" style={{backgroundColor: '#ffd7b6', marginTop: '20px', padding: '20px'}}>
              <h2>Estatísticas: Detalhes de Desempenho</h2>
              <table>
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Valor Atual</th>
                    <th>Último Mês</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Receita</td>
                    <td>R$ 15.000</td>
                    <td>R$ 14.500</td>
                  </tr>
                  <tr>
                    <td>Lucro</td>
                    <td>R$ 7.000</td>
                    <td>R$ 6.800</td>
                  </tr>
                  <tr>
                    <td>Novos Clientes</td>
                    <td>50</td>
                    <td>45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="graficos-section" className="content-section">
            <div className="chart" style={{backgroundColor: '#b6d1ff', padding: '20px'}}>
              <h2>Gráficos: Distribuição por Categoria</h2>
              <p>Gráfico de barras mostrando a distribuição de itens por diferentes categorias.</p>
              <div style={{height: '250px'}}>Gráfico de Categorias</div>
            </div>
            <div className="chart" style={{backgroundColor: '#b6d1ff', marginTop: '20px', padding: '20px'}}>
              <h2>Gráficos: Comparativo Anual</h2>
              <p>Gráfico de linhas múltiplas comparando o desempenho ao longo de anos diferentes.</p>
              <div style={{height: '250px'}}>Gráfico Comparativo</div>
            </div>
            <div className="chart" style={{backgroundColor: '#b6d1ff', marginTop: '20px', padding: '20px'}}>
              <h2>Gráficos: Tendência de Crescimento</h2>
              <p>Gráfico de área mostrando a tendência de crescimento ao longo do tempo.</p>
              <div style={{height: '250px'}}>Gráfico de Tendência</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>LOGO | Usuário</h1>
      </div>
    </main>
      </body>
    </html>
  );
}
