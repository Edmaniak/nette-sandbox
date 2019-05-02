<?php

declare(strict_types = 1);

namespace App\Presenters;

use Nette;
use Nette\Application\UI\Form;


final class HomepagePresenter extends BasePresenter
{
	public function renderPage(): void
	{

	}

	public function renderForm(): void
	{

	}

	public function renderJson()
	{
		$this->sendJson([
			'username'  => "A",
			'firstName' => "B",
			'lastName'  => "C",
		]);
	}

	protected function createComponentForm(): Form
	{
		$form = new Form();
		$form->addText('name', 'Name')->setRequired();
		$form->addText('surname', 'Surname')->setRequired();
		$form->addInteger('age', 'Age')->setRequired();
		$form->addSubmit('send', 'Send');
		$form->onSuccess[] = [$this, 'onSuccess'];
		return $form;
	}

	protected function onSuccess(Form $form, Nette\Utils\ArrayHash $values): void
	{

	}
}
