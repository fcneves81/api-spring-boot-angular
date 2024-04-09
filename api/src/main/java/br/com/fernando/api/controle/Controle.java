package br.com.fernando.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.fernando.api.modelo.Cliente;
import br.com.fernando.api.repositorio.Repositorio;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin(origins = "*")
public class Controle {
	
	@Autowired
	private Repositorio acao;
	
	/*Rota de cadastro*/
	@PostMapping("/")
	public Cliente cadastrar(@RequestBody Cliente c) {
		return acao.save(c);
	}	

	/*Rota de listagem*/
	@GetMapping("/")
	public Iterable<Cliente> selecionar(){
		return acao.findAll();
	}

	/*Rota de edição*/
	@PutMapping("/")
	public Cliente editar(@RequestBody Cliente c){
		return acao.save(c);
	}

	/*Rota de remoção*/
	@DeleteMapping("/{codigo}")
	public void remover(@PathVariable long codigo){
		acao.deleteById(codigo);
	}
}
