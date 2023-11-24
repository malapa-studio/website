<template>
	<div class="navbar bg-transparent">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</label>
				<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<li><a>Item 1</a></li>
					<li>
						<a>Parent</a>
						<ul class="p-2">
							<li><a>Submenu 1</a></li>
							<li><a>Submenu 2</a></li>
						</ul>
					</li>
					<li><a>Item 3</a></li>
				</ul>
			</div>
			<a class="">
				<img src="/test.gif" alt="" class="h-24 border border-red-500" />
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="flex gap-12">
				<li><a class="hover:underline hover:underline-offset-8 hover:cursor-pointer">Item 1</a></li>
				<li><a class="hover:underline hover:underline-offset-8 hover:cursor-pointer">Item 2</a></li>
			</ul>
			<a class="h-full px-12">
				<img src="/logo.png" alt="" class="h-48 cursor-pointer" />
			</a>
			<ul class="flex gap-12">
				<li><a class="hover:underline hover:underline-offset-8 hover:cursor-pointer">Item 3</a></li>
				<li><a class="hover:underline hover:underline-offset-8 hover:cursor-pointer">Item 4</a></li>
			</ul>
		</div>
		<div class="navbar-end">
		</div>
	</div>
</template>
