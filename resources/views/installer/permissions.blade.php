@extends('layouts.installer')

@section('subtitle', 'Verifying directory permissions')

@section('content')
	@error('permissions')
		<div class="flex justify-center">
			<div class="text-red-500">
				Directory permissions do not meet requirements.
			</div>
		</div>
	@enderror

	<div class="flex flex-col">
		<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
				
				@php
					$thead = ['Folder', 'Actual', 'Required', 'Pass'];
					$tbody = \Fusion\Console\Actions\CheckServerRequirements::permissions();
				@endphp

				<table class="min-w-full">
					<thead>
						<tr>
							@foreach($thead as $key => $value)
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									{{ $value }}
								</th>
							@endforeach
						</tr>
					</thead>
					<tbody>
						@foreach($tbody as $row)
							<tr class="bg-white">
								@foreach($row as $key => $value)
									<td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
										{{ $value }}
									</td>
								@endforeach
		          			</tr>
						@endforeach
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<form method="POST">
		@csrf
		<input type="hidden" name="permissions" value="true"/>

		<div class="mt-10 flex justify-between">
			<x-installer.button class="w-1/3" label="Back" href="{{ $prev }}"/>
			<x-installer.button class="w-1/3" label="Next" type="submit"/>
		</div>
	</form>
@endsection