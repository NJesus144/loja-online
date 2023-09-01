import { Head } from '../../components/Head/Head'
import { OrderHeader } from '../../components/OrderHeader/OrderHeader'

import { Container, Inner, Form } from './styles'

export function Payment() {
  return (
    <Container>
      <Head title="Pagamento" />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações pessoais</h4>

          <div className="field">
            <label htmlFor="full-name">Nome e sobrenome</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              autoComplete="name"
            />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
              />
            </div>

            <div className="field">
              <label htmlFor="mobile">Celular</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                autoComplete="phone"
              />
            </div>

            <div className="field">
              <label htmlFor="document">CPF / CNPJ</label>
              <input type="text" id="document" name="document" />
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className="field">
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              autoComplete="postal-code"
              style={{ width: '120px' }}
            />
          </div>

          <div className="field">
            <label htmlFor="street">Endereço</label>
            <input type="text" id="street" name="street" />
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="number">Número</label>
              <input type="text" id="number" name="number" />
            </div>
            <div className="field">
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                id="complement"
                name="complement"
                autoComplete="street-address"
              />
            </div>
          </div>

          <div className="grouped">
            <div className="field">
              <label htmlFor="neighborhood">Bairro</label>
              <input type="text" id="neighborhood" name="neighborhood" />
            </div>

            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input type="text" id="city" name="city" />
            </div>

            <div className="field">
              <label htmlFor="state">Estado</label>
              <select id="state" name="state">
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="DF">Distrito Federal</option>
              </select>
            </div>
          </div>
        </Form>
      </Inner>
    </Container>
  )
}