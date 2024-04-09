package br.com.fernando.api.repositorio;

import org.springframework.data.repository.CrudRepository;


import br.com.fernando.api.modelo.Cliente;


public interface Repositorio extends CrudRepository<Cliente, Long>{

}
